import { useCookieStore } from "@/components/cookie/useCookieValue";
import { setRoomName } from "@/reducers/room-reducer";
import { useAppDispatch } from "@/stores";
import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { createUniqueRoomId } from "src/features/createRoomId"

interface FormValues {
  userName: string;
}

const RoomCreateForm: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userNameCookie = useCookieStore("userName");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    userNameCookie.setValue(data.userName);
    // ルーム名を重複しないように自動生成
    const roomId = await createUniqueRoomId();
    dispatch(setRoomName(roomId));

    router.push("/matching");
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field.Root invalid={!!errors.userName} required>
          <Field.Label>ニックネーム</Field.Label>
          <Input {...register("userName")} />
          <Field.ErrorText>{errors.userName?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit" loading={isSubmitting} loadingText="作成中...">
          作成
        </Button>
      </Stack>
    </form>
  );
};

export default RoomCreateForm;
