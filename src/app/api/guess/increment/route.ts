import { getPusherInstance } from "@/libs/pusher/server";
const pusherServer = getPusherInstance();

export type GuessIncrementData = {
  prevIndex: number;
};

export async function POST(req: Request) {
  const { roomName, prevIndex } = await req.json();

  try {
    await pusherServer.trigger(`private-${roomName}`, "evt::guessIncrement", {
      prevIndex,
    } as GuessIncrementData);

    return Response.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Failed to test sockets", error: error },
      { status: 500 }
    );
  }
}
