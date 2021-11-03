import React from "react";
import { Box, Text, Center, Wrap, WrapItem } from "@chakra-ui/react";

const times = ["Breakfast", "Lunch", "Dinner", "Snack"];

export const RecipeTime: React.FC = () => {
  return (
    <Box>
      <Text fontWeight={"bold"}>Type</Text>
      <Box mt={"5px"}>
        <ul
          className={"options"}
          style={{ whiteSpace: "nowrap", overflow: "scroll" }}
        >
          {times.map((time, key) => (
            <li
              key={key}
              style={{ display: "inline-block", marginRight: "15px" }}
            >
              <Center bg={"#EDEBEB"} rounded={7} p={"10px"} minW={"150px"}>
                <Text fontWeight={"bold"}>{time}</Text>
              </Center>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};
