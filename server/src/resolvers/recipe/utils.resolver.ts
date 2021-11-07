import { Query, Resolver } from "type-graphql";
import { Time } from "../../entity/Utils/Time";
import { RecipeType } from "../../entity/Utils/RecipeType";

@Resolver()
export class RecipeUtilsResolver {
  @Query(() => [Time])
  async times(): Promise<Time[]> {
    return await Time.find();
  }

  @Query(() => [RecipeType])
  async recipeTypes(): Promise<RecipeType[]> {
    return await RecipeType.find();
  }
}
