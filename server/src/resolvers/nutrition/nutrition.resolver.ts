import { Resolver, Mutation, Query } from "type-graphql";
import { NutritionGuide } from "../../entity/Utils/NutritionGuide";
import { nutrition_guide } from "../../helpers/data/nutrition_guide";
import { getRandomColor } from "../../helpers/functions/randomColor";

@Resolver()
export class NutritionResolver {
  @Query(() => [NutritionGuide])
  async nutritionGuides() {
    return await NutritionGuide.find();
  }

  @Mutation(() => Boolean)
  async seed(): Promise<boolean> {
    try {
      for (let ng of nutrition_guide) {
        const ntr = new NutritionGuide();
        ntr.ntr_code = ng.ntr_code;
        ntr.unit = ng.unit;
        ntr.name = ng.name;
        ntr.color = getRandomColor();
        await ntr.save();
      }
      return true;
    } catch (e) {
      console.log("Something went wrong while seeding e : ", e);
      return false;
    }
  }
}
