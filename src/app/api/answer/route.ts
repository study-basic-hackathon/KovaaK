import { getPusherInstance } from "@/libs/pusher/server";
const pusherServer = getPusherInstance();

export type AnswerData = {
  userName: string;
  question: string;
  choices: string[];
  answer: string;
};

export async function POST(req: Request) {
  const { roomName, userName, question, choices, answer } = await req.json();

  try {
    await pusherServer.trigger(`private-${roomName}`, "evt::answered", {
      userName,
      question,
      choices,
      answer,
    } as AnswerData);

    return Response.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Failed to test sockets", error: error },
      { status: 500 }
    );
  }
}
