import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Nutrition } from "../../components";

export const DietPage: React.FC = () => {
  return (
    <Box>
      <Heading>Diet</Heading>
      <Nutrition />
    </Box>
  );
};
