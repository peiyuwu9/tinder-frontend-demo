import React, { useState } from "react";

import "./Keyboard.css";

function Keyboard({ chatRef }) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!message) return;
    chatRef.current.sendMsg(message.trim());
    setMessage("");
  };

  return (
    <form className="input">
      <input
        className="input-field"
        type="text"
        value={message}
        onChange={handleChange}
      />
      <button className="input-button" onClick={handleSend}>
        SEND
      </button>
    </form>
  );
}

export default Keyboard;
