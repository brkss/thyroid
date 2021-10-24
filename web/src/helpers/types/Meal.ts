import { IRecipe } from "./Recipe";
export interface IMeal {
  meal: string;
  time: string;
  recipes?: IRecipe[];
}
