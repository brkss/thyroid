import React from "react";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import { IRecipe } from "../../helpers/types/Recipe";

interface Props extends IRecipe {
  clicked: () => void;
}

export const RecipeMeal: React.FC<Props> = ({ title, time, cal, clicked }) => {
  return (
    <Box
      cursor={"pointer"}
      p={"10px"}
      bg={"#DFF1C6"}
      mt={"10px"}
      onClick={() => clicked()}
      rounded={"7px"}
    >
      <Text fontWeight={"bold"}>{title}</Text>
      <Text fontSize={"13px"}>{cal} cal</Text>
      <Text fontSize={"13px"} mt={"10px"}>
        {time} for preparation
      </Text>
    </Box>
  );
};
