import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { RecipeMeal } from ".";
interface Props {
  meal: string;
  time: string;
}

export const Meal: React.FC<Props> = ({ meal, time }) => {
  return (
    <Box m={"15px"} p={"15px"} rounded={7} border={"3px solid #888888"}>
      <Heading>{meal}</Heading>
      <Text>arround {time}</Text>
      <Box>
        <RecipeMeal />
        <RecipeMeal />
        <RecipeMeal />
      </Box>
    </Box>
  );
};
