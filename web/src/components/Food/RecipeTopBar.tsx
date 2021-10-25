import React from "react";
import { Box, Text, Wrap, WrapItem, Button } from "@chakra-ui/react";

const navs = [
  {
    name: "General",
    id: "GENERAL",
  },
  {
    name: "Ingredient",
    id: "INGREDIENT",
  },
  {
    name: "Instructions",
    id: "INSTRUCTION",
  },
  {
    name: "Nutrition",
    id: "NUTRITION",
  },
];

export const RecipeTopBar: React.FC = () => {
  const [active, SetActive] = React.useState<string>(navs[0].id);

  const handleNav = (id: string) => {
    SetActive(id);
  };
  return (
    <Box mb={"20px"}>
      <Wrap>
        {navs.map((nav, key) => (
          <WrapItem>
            <Button
              bg={active == nav.id ? "#dbf5db" : "transparent"}
              _hover={{ bg: "#dbf5db", outline: "none" }}
              _focus={{ outline: "none" }}
              onClick={() => handleNav(nav.id)}
            >
              {nav.name}
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};
