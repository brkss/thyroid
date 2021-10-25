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
} from "@chakra-ui/react";
import { RecipeTopBar } from "./RecipeTopBar";

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
          <RecipeTopBar />
          <Heading> Tropical Bowl </Heading>
          <Text fontSize={"15px"} mt={"10px"} fontWeight={"bold"}>
            A refreshing chopped cucumber salad loaded with peanuts, spices,
            toasted coconut, and chiles.
          </Text>
          <Image
            mt={"15px"}
            rounded={"10px"}
            src={
              "https://images.101cookbooks.com/CUCUMBER-SALAD-RECIPE-h.jpg?w=680"
            }
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
