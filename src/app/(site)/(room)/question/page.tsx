"use client";
import { useAppSelector } from "@/stores";
import { useRouter } from "next/navigation";
import { FC, Suspense, useEffect } from "react";
import QuestionAnswerForm from "./components/question-answer-form";

const Question: FC = () => {
  const { members } = useAppSelector((state) => state.roomInfo);
  const { answers } = useAppSelector((state) => state.answers);
  const router = useRouter();

  useEffect(() => {
    if (answers.length >= members.length) {
      console.log("回答が出揃いました！");
      router.push("/guess");
    }
  }, [answers]);

  return (
    <Suspense fallback={<p>...loading</p>}>
      <QuestionAnswerForm />
    </Suspense>
  );
};

export default Question;
