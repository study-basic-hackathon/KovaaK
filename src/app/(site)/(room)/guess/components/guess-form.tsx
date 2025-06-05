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
import { useCookieStore } from "@/components/cookie/useCookieValue";
import { useAppSelector } from "@/stores";

export interface GuessFormProps {
  question: string;
  choices: string[];
}

interface FormValues {
  guess: string;
}

const GuessForm: FC<GuessFormProps> = ({ question, choices }) => {
  const { roomName } = useAppSelector((state) => state.roomInfo);
  const userNameCookie = useCookieStore("userName");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (formData) => {
    const userName = userNameCookie.getValue();

    const otherInfo = {
      roomName: roomName,
      userName: userName,
    };

    const data = { ...otherInfo, ...formData };
    console.log("推測送信");
    console.log("%o", data);

    await fetch("/api/guess", {
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
            <Fieldset.Root invalid={!!errors.guess}>
              <Fieldset.Legend>{question}</Fieldset.Legend>
              <Controller
                name="guess"
                control={control}
                defaultValue={choices[0]}
                render={({ field }) => (
                  <RadioGroup.Root
                    name={field.name}
                    value={field.value}
                    onValueChange={({ value }) => {
                      field.onChange(value);
                    }}
                  >
                    <VStack w={200}>
                      {choices.map((choice, index) => (
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

              {errors.guess && (
                <Fieldset.ErrorText>{errors.guess?.message}</Fieldset.ErrorText>
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

export default GuessForm;
