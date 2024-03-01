import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";

import Keyboard from "./Keyboard";
import ChatWindow from "./ChatWindow";
import "./Chat.css";

function Chat() {
  const { chat } = useLoaderData();
  const chatRef = useRef();

  return (
    <div className="chat-content">
      <ChatWindow ref={chatRef} chat={chat} />
      <Keyboard chatRef={chatRef} />
    </div>
  );
}

export default Chat;
