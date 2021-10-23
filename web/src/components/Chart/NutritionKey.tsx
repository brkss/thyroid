import React from "react";
import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  color: string;
  name: string;
}

export const NutritionKey: React.FC<Props> = ({ name, color }) => {
  return (
    <Box>
      <Color style={{ background: color }} />
      <Text fontWeight={"bold"} d={"inline-block"} mt={"-2px"}>
        {name}
      </Text>
    </Box>
  );
};

const Color = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background: red;
  display: inline-block;
  margin-bottom: -4px;
  margin-right: 4px;
`;
