import { FC } from "react";
import {
  Box,
  Container,
  Center,
  VStack,
  Button,
  RadioGroup,
  Fieldset,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { QuestionData } from "@/app/api/question/route";
import { useCookieStore } from "@/components/cookie/useCookieValue";

let questionData: QuestionData | undefined;

interface FormValues {
  answer: string;
}

const QuestionAnswerForm: FC = () => {
  const userNameCookie = useCookieStore("userName");
  const roomNameCookie = useCookieStore("roomName");
  const fetchQuestionData = async (): Promise<QuestionData> => {
    const res = await fetch("/api/question", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  };

  if (!questionData) {
    throw fetchQuestionData().then((data) => (questionData = data));
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (formData) => {
    const roomName = roomNameCookie.getValue();
    const userName = userNameCookie.getValue();

    const otherInfo = {
      roomName: roomName,
      userName: userName,
      question: questionData?.question,
      choices: questionData?.choices,
    };

    const data = { ...otherInfo, ...formData };
    console.log("回答送信");
    console.log("%o", data);

    await fetch("/api/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });

  return (
    <Container>
      <Box h={400}>
        <Center h="100%">
          <form onSubmit={onSubmit}>
            <Fieldset.Root invalid={!!errors.answer}>
              <Fieldset.Legend>{questionData.question}</Fieldset.Legend>
              <Controller
                name="answer"
                control={control}
                defaultValue={questionData.choices[0]}
                render={({ field }) => (
                  <RadioGroup.Root
                    name={field.name}
                    value={field.value}
                    onValueChange={({ value }) => {
                      field.onChange(value);
                    }}
                  >
                    <VStack w={200}>
                      {questionData!.choices.map((choice, index) => (
                        <RadioGroup.Item key={choice} value={choice}>
                          <RadioGroup.ItemHiddenInput onBlur={field.onBlur} />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>{choice}</RadioGroup.ItemText>
                        </RadioGroup.Item>
                      ))}
                    </VStack>
                  </RadioGroup.Root>
                )}
              />

              {errors.answer && (
                <Fieldset.ErrorText>
                  {errors.answer?.message}
                </Fieldset.ErrorText>
              )}

              <Button size="sm" type="submit" alignSelf="flex-start">
                回答する
              </Button>
            </Fieldset.Root>
          </form>
        </Center>
      </Box>
    </Container>
  );
};

export default QuestionAnswerForm;
