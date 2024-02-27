import React, { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButton";
import "./Home.css";

function Home() {
  const { users } = useLoaderData();
  const [userList, setUserList] = useState(users);
  const tinderCardRef = useRef();

  return (
    <div className="home-content">
      <TinderCards ref={tinderCardRef} users={userList} />
      <SwipeButton tinderCardRef={tinderCardRef} users={userList} setUsers={setUserList} />
    </div>
  );
}

export default Home;
