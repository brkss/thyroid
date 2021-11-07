import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { parse } from "recipe-ingredient-parser-v3";
import { Recipe, Ingredient, Instruction } from "../../entity";
import { DefaultResponse } from "../../helpers/responses/default.response";
import axios from "axios";
import { API_URI } from "../../helpers/config/api";
const recipeScraper = require("recipe-scraper");

@Resolver()
export class RecipeResolver {
  @Query(() => [Recipe])
  async recipes(): Promise<Recipe[]> {
    const recipes = await Recipe.find({
      relations: ["ingredients", "instructions"],
    });
    return recipes;
  }

  @Mutation(() => DefaultResponse)
  async downloadRecipe(@Arg("url") url: string): Promise<DefaultResponse> {
    if (!url)
      return {
        status: false,
        message: "Invalid URL !",
      };
    try {
      const recipe_raw = await recipeScraper(url);
      //console.log("scrapped recipe => ", recipe_raw);
      const recipe = new Recipe();
      recipe.title = recipe_raw.name;
      recipe.description = recipe_raw.description;
      recipe.prep = recipe_raw.time.prep;
      recipe.cook = recipe_raw.time.cook;
      recipe.ready = recipe_raw.time.active;
      recipe.total = recipe_raw.time.total;
      recipe.servings = recipe_raw.servings;
      recipe.image = recipe_raw.image;
      recipe.url = url;
      await recipe.save();
      // get recipe nutrition !
      const res = await axios.post(API_URI, {
        title: recipe_raw.name,
        ingr: recipe_raw.ingrdients,
      });
      console.log("================");
      console.log("Recipe Nutriotion !");
      console.log(res.data);
      console.log("==============");

      // add ingrdients
      for (let ing of recipe_raw.ingredients) {
        const ingredient = new Ingredient();
        const parsed = parse(ing, "eng");
        ingredient.quantity = (parsed.quantity as any) || null;
        ingredient.unit = parsed.unit as any;
        ingredient.pluralUnit = parsed.unitPlural as any;
        ingredient.symbol = parsed.symbol as any;
        ingredient.minQty = parsed.minQty as any;
        ingredient.maxQty = parsed.maxQty as any;
        ingredient.raw = ing;
        ingredient.recipe = recipe;
        await ingredient.save();
      }
      // add instructions
      for (let ins of recipe_raw.instructions) {
        const instruction = new Instruction();
        instruction.text = ins;
        instruction.recipe = recipe;
        await instruction.save();
      }

      return {
        status: true,
        message: "Recipe Imported successfuly !",
      };
    } catch (e) {
      console.log("error accured downloading recipe !", e);
      return {
        status: false,
        message: "Something went wrong ! ",
      };
    }
  }
}
