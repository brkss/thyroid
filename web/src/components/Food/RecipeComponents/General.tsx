import React from "react";
import { Text, Box, Heading, Image } from "@chakra-ui/react";

export const General: React.FC = () => {
  return (
    <Box>
      <Heading> Tropical Bowl </Heading>
      <Text fontSize={"15px"} mt={"10px"} fontWeight={"bold"}>
        A refreshing chopped cucumber salad loaded with peanuts, spices, toasted
        coconut, and chiles.
      </Text>
      <Image
        mt={"15px"}
        rounded={"10px"}
        src={
          "https://images.101cookbooks.com/CUCUMBER-SALAD-RECIPE-h.jpg?w=680"
        }
      />
    </Box>
  );
};
