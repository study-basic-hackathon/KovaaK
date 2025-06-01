import { MessageList } from "@/features/message/components/MessageList";
import { type FC } from "react";

const Home: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MessageList />
    </main>
  );
};

export default Home;