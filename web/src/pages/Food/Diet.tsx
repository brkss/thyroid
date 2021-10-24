import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Nutrition, DietMechanismButton } from "../../components";

export const DietPage: React.FC = () => {
  return (
    <Box p={"30px"}>
      <Heading>Diet</Heading>
      <Nutrition />
      <DietMechanismButton />
    </Box>
  );
};
