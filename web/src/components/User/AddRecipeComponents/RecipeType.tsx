import React from "react";
import { Box, Text, Center, Wrap, WrapItem } from "@chakra-ui/react";

const types = ["AUP", "LC", "Gluten Free", "KETO"];

export const RecipeType: React.FC = () => {
  const [selected, SetSelected] = React.useState<string[]>([]);

  const selectElement = (type: string) => {
    if (!selected.includes(type)) {
      selected.push(type);
      SetSelected(selected);
      console.log("select element !");
    } else {
      const index = selected.findIndex((x) => x == type);
      const tmp = selected;
      tmp.splice(index, 1);
      SetSelected(tmp);
      console.log("unselect element !");
    }
  };
  return (
    <Box>
      <Text fontWeight={"bold"}>Type</Text>
      <Box mt={"5px"}>
        <ul
          className={"options"}
          style={{ whiteSpace: "nowrap", overflow: "scroll" }}
        >
          {types.map((type, key) => (
            <li
              onClick={() => selectElement(type)}
              key={key}
              style={{
                display: "inline-block",
                marginRight: "15px",
                cursor: "pointer",
              }}
            >
              <Center
                bg={selected.includes(type) ? "green" : "#EDEBEB"}
                rounded={7}
                p={"10px"}
                minW={"150px"}
              >
                <Text fontWeight={"bold"}>{type}</Text>
              </Center>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};
