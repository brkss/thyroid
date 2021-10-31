import React from "react";
import {
  Heading,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { AddRecipe } from ".";

interface Props {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
}

export const Settings: React.FC<Props> = ({ onClose, isOpen }) => {
  return (
    <Drawer size={"lg"} isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader></DrawerHeader>

        <DrawerBody>
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab _focus={{ outline: "none" }}>Profile</Tab>
              <Tab _focus={{ outline: "none" }}>Diet</Tab>
              <Tab _focus={{ outline: "none" }}>Recipes</Tab>
              <Tab _focus={{ outline: "none" }}>General</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Heading>tab</Heading>
              </TabPanel>
              <TabPanel>
                <Heading>tab</Heading>
              </TabPanel>
              <TabPanel>
                <AddRecipe />
              </TabPanel>
              <TabPanel>
                <h1>uuuuuu</h1>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
