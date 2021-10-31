import React from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { RecipeType, RecipeTime } from "./AddRecipeComponents";

export const AddRecipe: React.FC = () => {
  return (
    <Box>
      <Heading>Add Recipe </Heading>
      <Box>
        <FormControl mt={"10px"}>
          <FormLabel fontWeight={"bold"}>URL</FormLabel>
          <Input variant={"filled"} placeholder={"URL"} />
        </FormControl>
        <br />
        <RecipeType />
        <br />
        <RecipeTime />
      </Box>
    </Box>
  );
};
