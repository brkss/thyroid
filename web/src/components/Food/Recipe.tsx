import React from "react";
import {
  Text,
  Image,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { General, Ingredient } from "./RecipeComponents";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const Recipe: React.FC<Props> = ({ isOpen, onOpen, onClose }) => {
  return (
    <Drawer size={"lg"} isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader></DrawerHeader>

        <DrawerBody>
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab _focus={{ outline: "none" }}>General</Tab>
              <Tab _focus={{ outline: "none" }}>Ingredients</Tab>
              <Tab _focus={{ outline: "none" }}>Instructions</Tab>
              <Tab _focus={{ outline: "none" }}>Nutrition</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <General />
              </TabPanel>
              <TabPanel>
                <Ingredient />
              </TabPanel>
              <TabPanel>
                <h1>yyyy</h1>
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
