import React from "react";
import { Box, Text, Center, Wrap, WrapItem } from "@chakra-ui/react";

const times = ["Breakfast", "Lunch", "Dinner"];

export const RecipeTime: React.FC = () => {
  return (
    <Box>
      <Text fontWeight={"bold"}>Time</Text>
      <Box mt={"5px"}>
        <Wrap>
          {times.map((time, key) => (
            <WrapItem key={key}>
              <Center bg={"#EDEBEB"} rounded={7} p={"10px"} minW={"150px"}>
                <Text fontWeight={"bold"}>{time}</Text>
              </Center>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
};
