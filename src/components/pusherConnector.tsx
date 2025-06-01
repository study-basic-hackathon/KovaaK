"use client";

import { useAppDispatch } from "@/stores";
import { useEffect } from "react";
import { useCookieStore } from "./cookie/useCookieValue";
import { addMembers, removeMembers } from "@/reducers/roomReducer";
import { pusherClient } from "@/libs/pusher/client";
import { Members } from "pusher-js";

export function PusherConnector() {
  const dispatch = useAppDispatch();
  const roomNameCookie = useCookieStore("roomName");
  const userNameCookie = useCookieStore("userName");

  useEffect(() => {
    const roomName = roomNameCookie.getValue();
    const userName = userNameCookie.getValue();

    if (!!!roomName) {
      console.error("roomNameが存在しません。");
      return;
    }

    if (!!!userName) {
      console.error("userNameが存在しません。");
      return;
    }
    console.log(`cookie roomName: ${roomName}`);
    console.log(`cookie userName: ${userName}`);

    const privateChannel = pusherClient(userName).subscribe(
      `private-${roomName}`
    );
    console.log(`channelに接続しました。${privateChannel.name}`);

    const presenceChannel = pusherClient(userName).subscribe(
      "presence-common_room"
    );

    presenceChannel.bind(
      "pusher:subscription_succeeded",
      (members: Members) => {
        members.each((member: any) => {
          dispatch(addMembers(member.info.name));
        });
      }
    );
    presenceChannel.bind("pusher:member_added", (member: any) => {
      console.log("メンバー追加！");
      dispatch(addMembers(member.info.name));
    });
    presenceChannel.bind("pusher:member_removed", (member: any) => {
      console.log("メンバー削除！");
      dispatch(removeMembers(member.info.name));
    });

    return () => {
      privateChannel.unbind_all();
      privateChannel.unsubscribe();
      presenceChannel.unbind_all();
      presenceChannel.unsubscribe();
    };
  }, []);
  return null;
}
