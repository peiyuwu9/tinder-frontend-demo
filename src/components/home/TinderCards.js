import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";

import TinderCard from "react-tinder-card";
import StarsIcon from "@mui/icons-material/Stars";
import "./TinderCards.css";

const TinderCards = forwardRef(function TinderCards({ users }, ref) {
  const [currentIndex, setCurrentIndex] = useState(users.length - 1);
  const tinderCardRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map((i) => React.createRef()),
    [users.length]
  );

  const swiped = (direction, nameToDelete, index) => {
    setCurrentIndex(index - 1);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        currentIndex,
        refreshIndex(userLength) {
          setCurrentIndex(userLength - 1);
        },
        async swipe(direction) {
          if (currentIndex < 0) return;
          await tinderCardRefs[currentIndex].current.swipe(direction);
          setCurrentIndex(currentIndex - 1);
        },
      };
    },
    [currentIndex, tinderCardRefs]
  );

  return (
    <div className="tinder-cards-container">
      {users.map(({ name, img_url, is_stared }, index) => (
        <TinderCard
          ref={tinderCardRefs[index]}
          className="swipe"
          key={name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, name, index)}
        >
          <div style={{ backgroundImage: `url(${img_url})` }} className="card">
            <h3>{name}</h3>
            {is_stared && (
              <StarsIcon fontSize="large" className="buttons-star" />
            )}
          </div>
        </TinderCard>
      ))}
    </div>
  );
});

export default TinderCards;
