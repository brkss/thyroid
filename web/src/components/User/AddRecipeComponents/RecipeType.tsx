import React from "react";
import { Box, Text, Center, Wrap, WrapItem } from "@chakra-ui/react";

const types = ["AUP", "LC", "Gluten Free"];

export const RecipeType: React.FC = () => {
  return (
    <Box>
      <Text fontWeight={"bold"}>Type</Text>
      <Box mt={"5px"}>
        <Wrap>
          {types.map((type, key) => (
            <WrapItem key={key}>
              <Center bg={"#EDEBEB"} rounded={7} p={"10px"} minW={"150px"}>
                <Text fontWeight={"bold"}>{type}</Text>
              </Center>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
};
