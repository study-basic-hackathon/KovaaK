"use client";
import { useAppSelector } from "@/stores";
import { useRouter } from "next/navigation";
import { FC, Suspense, useEffect, useState } from "react";
import QuestionAnswerForm from "./components/question-answer-form";
import { Rings } from "react-loader-spinner";
import { Text } from "@chakra-ui/react";

const Question: FC = () => {
  const { members } = useAppSelector((state) => state.roomInfo);
  const { answers } = useAppSelector((state) => state.answers);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (answers.length >= members.length) {
      console.log("回答が出揃いました！");
      router.push("/guess");
    }
  }, [answers]);

  return (
    <Suspense fallback={<p>...loading</p>}>
      {!isWaiting && <QuestionAnswerForm setIsWaiting={setIsWaiting} />}
      {isWaiting && (
        <>
          <Rings />
          <Text>皆の回答待ち</Text>
        </>
      )}
    </Suspense>
  );
};

export default Question;
