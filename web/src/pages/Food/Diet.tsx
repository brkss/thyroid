import React from "react";
import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import { Nutrition, DietMechanismButton, Meal } from "../../components";
import { meals } from "../../helpers/data/meals";

export const DietPage: React.FC = () => {
  return (
    <Box p={"30px"}>
      <Heading fontWeight={"bold"} fontSize={"40px"}>
        Diet
      </Heading>
      <Nutrition />
      <DietMechanismButton />
      <Box mt={"20px"}>
        <Heading fontSize={"25px"}>23, Oct 2021</Heading>
        <Grid mt={"20px"} templateColumns="repeat(12, 1fr)">
          {meals.map((meal, key) => (
            <GridItem colSpan={3}>
              <Meal meal={meal.meal} time={meal.time} key={key} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
