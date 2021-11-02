import React from "react";
import { Box, Heading, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import { Nutrition, DietFlags, Meal, Recipe } from "../../components";
import { meals } from "../../helpers/data/meals";

export const DietPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box p={"30px"}>
      <Heading fontWeight={"bold"} fontSize={"40px"}>
        Diet
      </Heading>
      <Nutrition />
      <DietFlags />
      <Box mt={"10px"}>
        <Heading fontSize={"25px"}>23, Oct 2021</Heading>
        <Grid mt={"0px"} templateColumns="repeat(12, 1fr)">
          {meals.map((meal, key) => (
            <GridItem colSpan={3}>
              <Meal
                showRecipe={() => onOpen()}
                recipes={meal.recipes}
                meal={meal.meal}
                time={meal.time}
                key={key}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Recipe
        onClose={() => onClose()}
        isOpen={isOpen}
        onOpen={() => onOpen()}
      />
    </Box>
  );
};
