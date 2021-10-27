import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import * as ReactIcons from "react-icons/all";

const ingredients = [
  "1 (3 pound) spaghetti squash, halved and seeded",
  "1 tablespoon olive oil",
  "½ cup onion, chopped",
  "½ pound vegetarian ground beef",
  "1 (15 ounce) jar tomato sauce",
  "2 tablespoons peanut butter",
  "1 tablespoon dried oregano",
  "½ teaspoon sweet paprika",
  "½ teaspoon ground thyme",
  "½ teaspoon tomato paste",
  "¼ teaspoon ground turmeric",
  "salt and freshly ground pepper, to taste",
];

export const Ingredient: React.FC = () => {
  const [checked, SetChecked] = React.useState<number[]>([]);

  const handleCheck = (index: number) => {
    if (checked.includes(index)) {
      SetChecked((prev) =>
        prev.splice(
          prev.findIndex((x) => x == index),
          1
        )
      );
    } else {
      SetChecked([...checked, index]);
    }
  };

  return (
    <Box>
      <Heading>Ingredients</Heading>
      <Box>
        {ingredients.map((ing, key) => (
          <Box
            onClick={() => handleCheck(key)}
            _hover={{ bg: "#efefef", transition: ".3s" }}
            transition={".3s"}
            cursor={"pointer"}
            p={"10px"}
            bg={"#f7f6f6"}
            py={"15px"}
            rounded={"5px"}
            my={"15px"}
            key={key}
          >
            <Text
              textDecoration={checked.includes(key) ? "line-through" : "none"}
              fontWeight={"bold"}
            >
              <ReactIcons.FiInfo
                style={{ marginRight: "5px", display: "inline-block" }}
              />
              {ing}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
