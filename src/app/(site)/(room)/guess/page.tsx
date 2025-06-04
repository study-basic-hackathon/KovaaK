"use client";

import { AnswerData } from "@/app/api/answer/route";
import { useAppSelector } from "@/stores";
import { FC, useEffect, useState } from "react";
import GuessForm from "./components/guess-form";
import { Button, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Guess: FC = () => {
  const { answers } = useAppSelector((state) => state.answers);
  const { guesses } = useAppSelector((state) => state.guesses);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (guesses.length >= answers.length) {
      setShowResult(true);
    }
  }, [guesses]);

  const handleClick = () => {
    if (currentAnswerIndex >= answers.length - 1) {
      router.push("/result");
      return;
    }
    setCurrentAnswerIndex(currentAnswerIndex + 1);
    setShowResult(false);
  };

  return (
    <>
      {!showResult && (
        <Container>
          <Text>
            {answers[currentAnswerIndex].userName}さんはどれを選んだかな？
          </Text>
          <GuessForm
            question={answers[currentAnswerIndex].question}
            choices={answers[currentAnswerIndex].choices}
          />
        </Container>
      )}
      {showResult && (
        <Container>
          <Text>{answers[currentAnswerIndex].userName}さんの結果</Text>
          <Text>みんなの推測</Text>
          {guesses.map((guess) => (
            <Text>{guess.guess}</Text>
          ))}
          <Text>{answers[currentAnswerIndex].userName}さんの回答</Text>
          <Text>{answers[currentAnswerIndex].answer}</Text>
          <Button colorPalette="teal" onClick={handleClick}>
            次へ
          </Button>
        </Container>
      )}
    </>
  );
};

export default Guess;
