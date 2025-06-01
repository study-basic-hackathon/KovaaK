"use client";
import { type FC } from "react";
import {
  Box,
  Button,
  Center,
  CloseButton,
  Dialog,
  HStack,
} from "@chakra-ui/react";
import RoomCreateForm from "./components/room-create-form";

const Top: FC = () => {
  const RoomCreateDialog = (
    <Dialog.Root>
      <Dialog.Trigger width="100%" padding="80px" asChild>
        <Button colorPalette="teal" variant="surface" size="md">
          ルーム作成
        </Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
          <Dialog.Header>
            <Dialog.Title>ルーム作成</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <RoomCreateForm />
          </Dialog.Body>
          <Dialog.Footer />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );

  const RoomJoinDialog = (
    <Dialog.Root>
      <Dialog.Trigger width="100%" padding="80px" asChild>
        <Button colorPalette="teal" variant="surface" size="md">
          ルーム参加
        </Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
          <Dialog.Header>
            <Dialog.Title>ルーム参加</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body />
          <Dialog.Footer />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );

  return (
    <Box h={400}>
      <Center h="100%">
        <HStack gap="20">
          <Center>{RoomCreateDialog}</Center>
          <Center>{RoomJoinDialog}</Center>
        </HStack>
      </Center>
    </Box>
  );
};

export default Top;
