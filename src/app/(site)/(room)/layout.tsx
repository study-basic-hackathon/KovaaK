"use client";
import { FC, Suspense } from "react";
import { Provider } from "@/components/ui/provider";
import { PusherConnector } from "@/components/pusher-connector";

type RoomLayoutProps = {
  children: React.ReactNode;
};

const RoomLayout: FC<RoomLayoutProps> = (props) => {
  return (
    <>
      <Suspense fallback={null}>{<PusherConnector />}</Suspense>
      <Provider>{props.children}</Provider>
    </>
  );
};
export default RoomLayout;
