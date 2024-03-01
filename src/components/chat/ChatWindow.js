import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import { Avatar } from "@mui/material";
import "./ChatWindow.css";

const ChatWindow = forwardRef(function ChatWindow({ chat }, ref) {
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    setConversation(chat?.conversation);
  }, [chat]);

  useImperativeHandle(ref, () => {
    return {
      async sendMsg(msg) {
        setConversation((prevConv) => {
          prevConv.push({
            is_self: true,
            msg,
          });
          return [...prevConv];
        });
        console.log(chat);
        await fetch(
          `http://127.0.0.1:5001/tinder-demo-6f22c/us-central1/app/api/chat/${chat._id}`,
          { method: "PUT", body: JSON.stringify(msg) }
        );
      },
    };
  });

  return (
    <div className="chat-window">
      {conversation.map(({ is_self, msg }, index) => (
        <div className={`${is_self ? "right-chat" : "left-chat"}`} key={index}>
          {!is_self && <Avatar src={chat.img_url} alt={chat.name} />}
          <p>{msg}</p>
        </div>
      ))}
    </div>
  );
});

export default ChatWindow;
