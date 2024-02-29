import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";

import TinderCard from "react-tinder-card";
import StarsIcon from "@mui/icons-material/Stars";
import "./TinderCards.css";

const TinderCards = forwardRef(function TinderCards({ data }, ref) {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(data.length - 1);
  const tinderCardRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map((i) => React.createRef()),
    [users.length]
  );

  const swiped = (dir, name, index) => {
    setCurrentIndex(index - 1);
  };

  useEffect(() => {
    setUsers(data);
  }, [data]);

  useImperativeHandle(
    ref,
    () => {
      return {
        async refresh() {
          const res = await fetch(
            "https://app-fps7xsgziq-uc.a.run.app/api/users"
          );
          const users = await res.json();
          setUsers(users);
          setCurrentIndex(users.length - 1);
        },
        async swipe(direction) {
          if (currentIndex < 0) return;
          await tinderCardRefs[currentIndex].current.swipe(direction);
          setCurrentIndex(currentIndex - 1);
        },
        async star() {
          if (users[currentIndex]?.is_stared) return;
          setUsers((users) => {
            users[currentIndex]["is_stared"] = true;
            users[currentIndex]["new_stared"] = true;
            return [...users];
          });
          await fetch(
            `https://app-fps7xsgziq-uc.a.run.app/api/user/${users[currentIndex]._id}/star`,
            { method: "PUT" }
          );
        },
      };
    },
    [currentIndex, tinderCardRefs, users]
  );

  return (
    <div className="tinder-cards-container">
      {users.map(({ name, img_url, is_stared, new_stared }, index) => (
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
              <StarsIcon
                fontSize="large"
                className={`star ${new_stared && "new-star"}`}
              />
            )}
          </div>
        </TinderCard>
      ))}
    </div>
  );
});

export default TinderCards;
