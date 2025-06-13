"use client";
import { useAppSelector } from "@/stores";
import { useRouter } from "next/navigation";
import { FC, Suspense, useEffect, useState } from "react";
import QuestionAnswerForm from "./components/question-answer-form";
import { Rings } from "react-loader-spinner";
import { Container, Box, Center, Text } from "@chakra-ui/react";

const Question: FC = () => {
  const { members } = useAppSelector((state) => state.roomInfo);
  const { answers } = useAppSelector((state) => state.answers);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (answers.length >= members.length) {
      router.push("/guess");
    }
  }, [answers]);

  return (
    <Suspense fallback={<p>...loading</p>}>
      {!isWaiting && (
        <QuestionAnswerForm
          setIsWaiting={setIsWaiting}
          membersCount={members.length}
          answersCount={answers.length}
        />
      )}
      {isWaiting && (
        <Container>
          <Box h="100vh">
            <Center h="100%">
              <Rings />
              <Text>皆の回答待ち</Text>
            </Center>
          </Box>
        </Container>
      )}
    </Suspense>
  );
};

export default Question;
