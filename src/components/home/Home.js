import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";

import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButton";
import "./Home.css";

function Home() {
  const { users } = useLoaderData();
  const tinderCardRef = useRef();

  return (
    <div className="home-content">
      <TinderCards ref={tinderCardRef} users={users} />
      <SwipeButton tinderCardRef={tinderCardRef} />
    </div>
  );
}

export default Home;
