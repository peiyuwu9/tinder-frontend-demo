import React from "react";

import "./Keyboard.css";

function Keyboard() {
  return (
    <form className="input">
      <input className="input-field" type="text" />
      <button className="input-button">SEND</button>
    </form>
  );
}

export default Keyboard;
