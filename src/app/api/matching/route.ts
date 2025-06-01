import { getPusherInstance } from "@/libs/pusher/server";
const pusherServer = getPusherInstance();

export const dynamic = "force-dynamic"; // defaults to auto

export type RoomJoinReturnData = {
  userName: string;
  date: Date;
};

export async function POST(req: Request, res: Response) {
  const { roomName, userName } = await req.json();
  try {
    await pusherServer.trigger(`private-${roomName}`, "evt::roomJoin", {
      userName: userName,
      date: new Date(),
    } as RoomJoinReturnData);

    return Response.json({ message: "Sockets tested" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Failed to test sockets", error: error },
      { status: 500 }
    );
  }
}
