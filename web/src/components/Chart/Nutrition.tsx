import React from "react";
import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { data } from "../../helpers/data/Nutritions";
import { NutritionKey } from ".";

export const Nutrition: React.FC = () => {
  return (
    <Box mb={"30px"} mt={"30px"}>
      <Box>
        {data.map((nut, key) => (
          <Nut
            key={key}
            style={{
              borderTopLeftRadius: key == 0 ? "50px" : "",
              borderBottomLeftRadius: key == 0 ? "50px" : "",
              borderTopRightRadius: key == data.length - 1 ? "50px" : "",
              borderBottomRightRadius: key == data.length - 1 ? "50px" : "",
              background: nut.color,
              width: `${nut.domination}%`,
            }}
          />
        ))}
      </Box>
      <Box mt={"10px"}>
        <Wrap spacing={4}>
          {data.map((nut, key) => (
            <WrapItem>
              <NutritionKey color={nut.color} name={nut.name} key={key} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
};

const Nut = styled.span`
  background: red;
  height: 20px;
  display: inline-block;
`;
