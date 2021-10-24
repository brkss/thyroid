import { Resolver, Query, Arg } from "type-graphql";
import { parse } from "recipe-ingredient-parser-v3";
const recipeScraper = require("recipe-scraper");

@Resolver()
export class RecipeResolver {
  @Query(() => Boolean)
  async downloadRecipe(@Arg("url") url: string) {
    if (!url) return false;
    let recipe = null;
    try {
      recipe = await recipeScraper(url);
      /*
      if(recipe.ingredients){
        recipe.ingredients.map()
      }
      */
      const ingredients = [
        "3 medium cucumbers, partially peeled",
        "1-2 green serrano chiles, stemmed and minced",
        "1/2 cup / 2.5 ounces / 70 g peanuts, toasted",
        "1/3 cup / 1.5 ounces / 45 g dried large-flake coconut, toasted",
        "2 tablespoons fresh lemon juice",
        "1 teaspoon natural cane sugar",
        "1 tablespoon, ghee, clarified butter, or sunflower oil",
        "1/2 teaspoon black mustard seeds",
        "1/4 teaspoon cumin seeds",
        "scant 1/2 teaspoon fine grain sea salt",
        "a handful cilantro, chopped",
      ];
      for (let ing of ingredients) {
        console.log("ing => ", parse(ing, "eng"));
      }
      return true;
    } catch (e) {
      console.log("error accured downloading recipe !", e);
      return false;
    }
  }
}
