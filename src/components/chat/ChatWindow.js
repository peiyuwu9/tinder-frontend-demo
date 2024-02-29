import React from "react";

import "./ChatWindow.css";

function ChatWindow({ chat }) {
  return (
    <div className="chat-window">
      {chat.map(({ content, is_self }) => (
        <p className={`${is_self ? "right-chat" : "left-chat"}`} key={content}>
          {content}
        </p>
      ))}
    </div>
  );
}

export default ChatWindow;
