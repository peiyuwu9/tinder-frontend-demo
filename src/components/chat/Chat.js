import React from "react";
import { useLoaderData } from "react-router-dom";

import Keyboard from "./Keyboard";
import ChatWindow from "./ChatWindow";
import "./Chat.css";

function Chat() {
  const { chat } = useLoaderData();

  return (
    <div className="chat-content">
      <ChatWindow chat={chat} />
      <Keyboard />
    </div>
  );
}

export default Chat;
