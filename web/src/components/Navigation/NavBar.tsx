import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Wrap,
  WrapItem,
  Text,
  Center,
  Avatar,
  useDisclosure,
} from "@chakra-ui/react";
import { Settings } from "..";

export const NavBar: React.FC = () => {
  const _settings = useDisclosure();
  return (
    <Box p={"15px"} bg={"#FFF"} borderBottom={"1px solid #00000017"} w={"full"}>
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={3} pb={"2px"}>
          <Text fontWeight={"bold"}>OpenCC</Text>
        </GridItem>
        <GridItem colSpan={6} pb={"2px"}>
          <Center>
            <Wrap alignContent={"center"} spacing={4}>
              <WrapItem>
                <Text fontWeight={"bold"}>My Diet</Text>
              </WrapItem>
              <WrapItem>
                <Text fontWeight={"bold"}>Sleep</Text>
              </WrapItem>
              <WrapItem>
                <Text fontWeight={"bold"}>Preference</Text>
              </WrapItem>
            </Wrap>
          </Center>
        </GridItem>
        <GridItem colSpan={3}>
          <Wrap justify={"right"} spacing={4}>
            <WrapItem>
              <Avatar
                onClick={() => _settings.onOpen()}
                size={"sm"}
                name="Me"
                src="https://bit.ly/dan-abramov"
              />
            </WrapItem>
          </Wrap>
        </GridItem>
      </Grid>
      <Settings {..._settings} />
    </Box>
  );
};
