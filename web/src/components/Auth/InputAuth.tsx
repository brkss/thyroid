import React from "react";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  placeholder: string;
  type?: string;
  changed: (vl: string) => void;
}

export const InputAuth: React.FC<Props> = ({ placeholder, type, changed }) => {
  return (
    <Box>
      <Input
        placeholder={placeholder}
        type={!type ? "text" : type}
        onChange={(e) => changed(e.currentTarget.value)}
      />
    </Box>
  );
};

const Input = styled.input`
  margin-bottom: 10px;
  padding: 6px;
  background: none;
  font-weight: bold;
  font-size: 32px;
  background: transparent;
  &:focus {
    outline: none;
    border: none;
  }
`;
