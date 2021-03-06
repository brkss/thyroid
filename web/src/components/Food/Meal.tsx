import React from "react";
import { Box, Text, Heading, Center } from "@chakra-ui/react";
import { RecipeMeal } from ".";
import { IRecipe } from "../../helpers/types/Recipe";
import * as ReactIcons from "react-icons/all";

interface Props {
  meal: string;
  time: string;
  recipes?: IRecipe[];
  showRecipe: () => void;
}

export const Meal: React.FC<Props> = ({ meal, time, recipes, showRecipe }) => {
  return (
    <Box m={"15px"} mt={"0px"} p={"15px"} rounded={7}>
      <Heading>{meal}</Heading>
      <Text>arround {time}</Text>
      <Box>
        {recipes?.map((recipe, key) => (
          <RecipeMeal clicked={() => showRecipe()} {...recipe} key={key} />
        ))}
        <Center
          h={"100px"}
          mt={"15px"}
          bg={"#f7f7f7"}
          rounded={"7px"}
          fontWeight={"bold"}
          fontSize={"25px"}
        >
          <ReactIcons.FiPlus />
        </Center>
      </Box>
    </Box>
  );
};
