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
import { AddIcon } from "@chakra-ui/icons";

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
        <br />
        <br />
        <Button minW={"100px"}>
          <AddIcon fontSize={"14px"} mr={"5px"} /> Add
        </Button>
      </Box>
    </Box>
  );
};
