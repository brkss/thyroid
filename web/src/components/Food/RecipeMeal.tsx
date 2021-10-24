import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const RecipeMeal: React.FC = () => {
  return (
    <Box p={"10px"} bg={"#DFF1C6"} mt={"10px"} rounded={"7px"}>
      <Text fontWeight={"bold"}>Tropical Bowl</Text>
      <Text fontSize={"13px"}>33 cal</Text>
      <Text fontSize={"13px"} mt={"10px"}>
        15 min for preparation
      </Text>
    </Box>
  );
};
