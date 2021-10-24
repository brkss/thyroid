import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { RecipeMeal } from ".";
import { IRecipe } from "../../helpers/types/Recipe";

interface Props {
  meal: string;
  time: string;
  recipes?: IRecipe[];
  showRecipe: () => void;
}

export const Meal: React.FC<Props> = ({ meal, time, recipes, showRecipe }) => {
  return (
    <Box m={"15px"} p={"15px"} rounded={7}>
      <Heading>{meal}</Heading>
      <Text>arround {time}</Text>
      <Box>
        {recipes?.map((recipe, key) => (
          <RecipeMeal clicked={() => showRecipe()} {...recipe} key={key} />
        ))}
      </Box>
    </Box>
  );
};
