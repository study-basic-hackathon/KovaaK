"use client";
import { FC, useEffect, useState } from "react";
import { useAppSelector } from "@/stores";
import {
  Bleed,
  Box,
  Button,
  Center,
  Container,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { RoomCondition } from "@/types/room-condition";

const Matching: FC = () => {
  const { roomName, roomCondition, members } = useAppSelector(
    (state) => state.roomInfo
  );
  const router = useRouter();

  useEffect(() => {
    if (roomCondition === RoomCondition.Progressing) {
      router.push("/question");
    }
  }, [roomCondition]);

  const onClick = async () => {
    const body = { roomName: roomName };
    const res = await fetch("/api/room/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <Container>
      <Box h={100}>
        <Center h="100%">
          <Bleed>部屋のあいことば: {roomName}</Bleed>
        </Center>
      </Box>

      <Box h={100}>
        <Center h="100%">
          <Bleed>ゆーざーいちらん</Bleed>
        </Center>
      </Box>

      <Box h={400}>
        <Center h="100%">
          <VStack w={200}>
            {members.map((member, index) => (
              <Box
                key={index}
                w="100%"
                p="4"
                bg="teal"
                color="white"
                textAlign={"center"}
              >
                {member}
              </Box>
            ))}
          </VStack>
        </Center>
      </Box>
      <Box h={100}>
        <Center h="100%">
          <Button onClick={onClick}>Start</Button>
        </Center>
      </Box>
    </Container>
  );
};

export default Matching;
