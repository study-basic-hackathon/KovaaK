import { getPusherInstance } from "@/libs/pusher/server";
const pusherServer = getPusherInstance();

export type GuessData = {
  userName: string;
  guess: string;
};

export async function POST(req: Request) {
  const { roomName, userName, guess } = await req.json();

  try {
    await pusherServer.trigger(`private-${roomName}`, "evt::guessed", {
      userName,
      guess,
    } as GuessData);

    return Response.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Failed to test sockets", error: error },
      { status: 500 }
    );
  }
}
