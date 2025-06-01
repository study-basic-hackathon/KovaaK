"use client";
import { FC, useEffect, useState } from "react";
import { useCookieStore } from "@/components/cookie/useCookieValue";
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

const Matching: FC = () => {
  const { members } = useAppSelector((state) => state.roomInfo);
  const router = useRouter();

  const onClick = () => {
    router.push("/question");
  };

  return (
    <Container>
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
