import React, { useEffect, useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "../axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  async function fetchData() {
    const req = await axios.get("/tinder/cards");
    setPeople(req.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log(`removing: ${nameToDelete}`);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen!`);
  };

  return (
    <div className="tinder-cards">
      <div className="tinder-cards-container">
        {people.map((person, i) => (
          <TinderCard
            className="swipe"
            key={i}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
