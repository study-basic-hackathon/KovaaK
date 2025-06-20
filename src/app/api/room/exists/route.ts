import { getPusherInstance } from "@/libs/pusher/server";
const pusherServer = getPusherInstance();

export async function POST(req: Request) {
  const { roomName } = await req.json();
  try {
    const response = await pusherServer.get({
      path: `/channels/presence-${roomName}`,
    });
    const { occupied } = await response.json();

    console.log(`${roomName}の存在: ${occupied}`);

    return Response.json({ occupied: occupied }, { status: 200 });
  } catch (error) {
    return Response.json({ occupied: false }, { status: 404 });
  }
}
