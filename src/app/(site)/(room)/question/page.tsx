"use client";
import {
  Box,
  Container,
  Center,
  VStack,
  Bleed,
  Button,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

const Question: FC = () => {
  const [question, setQuestion] = useState(null);
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("/api/question", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await data.json();
      setQuestion(json.question);
      setChoices(json.choices);
    })();
  }, []);

  return (
    <Container>
      <Box h={100}>
        <Center h="100%">
          <Bleed>{question}</Bleed>
        </Center>
      </Box>

      <Box h={400}>
        <Center h="100%">
          <VStack w={200}>
            {choices.map((choice, index) => (
              <Button
                key={index}
                w="100%"
                p="4"
                bg="teal"
                color="white"
                textAlign={"center"}
              >
                {choice}
              </Button>
            ))}
          </VStack>
        </Center>
      </Box>
    </Container>
  );
};

export default Question;
