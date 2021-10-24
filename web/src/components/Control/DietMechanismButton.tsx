import React from "react";
import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const DietMechanismButton: React.FC = () => {
  return (
    <Box
      bg={"#D5F7D6"}
      rounded={"7px"}
      d={"inline-block"}
      paddingY={"5px"}
      paddingX={"15px"}
    >
      <Circle />
      <Text fontWeight={"bold"} d={"inline-block"}>
        {" "}
        Automatic{" "}
      </Text>
    </Box>
  );
};

const Circle = styled.span`
  height: 15px;
  width: 16px;
  display: inline-block;
  border-radius: 100%;
  background: #90d392;
  margin-bottom: -1px;
  margin-right: 3px;
`;
