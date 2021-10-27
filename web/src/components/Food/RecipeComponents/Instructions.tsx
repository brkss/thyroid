import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import * as ReactIcons from "react-icons/all";

const instructions = [
  "Preheat the oven to 375 F. Line two baking sheets with parchment paper.",
  "Fill a medium saucepan one-quarter full with water and bring to a simmer over medium-high heat. In a large heatproof bowl combine 7 ounces (200g) of the chocolate, butter, and almond butter, and place over the simmering water. Stir until the chocolate is nearly all melted, then remove from the heat. Stir again after a minute or so, the residual heat will continue to melt the chocolate.",
  "In the bowl of a stand mixer fitted with the whisk attachment, combine the eggs, brown sugar, and vanilla and beat on high speed until the eggs are pale and thick, about 5 minutes. Pour in the melted chocolate and beat on medium speed until thick, another minute or so.",
  "In a small bowl, stir together the buckwheat flour, cocoa powder, baking soda, and salt. Fold this into the batter with a spatula. Scoop 1 1/2-tablespoon mounds of dough onto each baking sheet, leaving 2-inches of space between. Lightly press small pieces of the remaining chocolate into the top of each cookie.",
  "Bake for 8 to 9 minutes, until the edges of the cookies are crispy but the centers are soft. These are cookies you want to be careful not to overbake. They might look a little underdone, but they will set during cooling. Cool on the pan for 10 minutes, or until you are able to pick the cookies up without them falling apart. They will keep for three days in an airtight container.",
];

export const Instructions: React.FC = () => {
  return (
    <Box>
      <Heading>Instructions</Heading>
      <Box>
        {instructions.map((ins, key) => (
          <Box mt={"10px"} p={"8px"} key={key}>
            <Text fontWeight={"bold"}>
              <ReactIcons.BsCheckCircle style={{ display: "inline-block" }} />{" "}
              Step {key + 1}
            </Text>
            <Text>{ins}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
