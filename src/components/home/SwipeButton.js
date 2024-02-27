import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import ReplayIcon from "@mui/icons-material/Replay";
import StarRateIcon from "@mui/icons-material/StarRate";
import "./SwipeButton.css";

function SwipeButton({ tinderCardRef, users, setUsers }) {
  const handleRefresh = async () => {
    const res = await fetch("https://app-fps7xsgziq-uc.a.run.app/api/users");
    const users = await res.json();
    setUsers(users);
    tinderCardRef.current.refreshIndex(users.length);
  };

  const handleStar = async () => {
    await fetch(
      `https://app-fps7xsgziq-uc.a.run.app/api/user/${
        users[tinderCardRef.current.currentIndex]._id
      }/star`,
      { method: "PUT" }
    );
    setUsers((users) => {
      users[tinderCardRef.current.currentIndex]["is_stared"] = true;
      return [...users];
    });
  };

  return (
    <div className="swipe-buttons">
      <IconButton onClick={handleRefresh}>
        <ReplayIcon fontSize="inherit" className="swipe-buttons-repeat" />
      </IconButton>
      <IconButton onClick={() => tinderCardRef.current.swipe("left")}>
        <CloseIcon fontSize="inherit" className="swipe-buttons-left" />
      </IconButton>
      <IconButton onClick={() => tinderCardRef.current.swipe("right")}>
        <FavoriteIcon fontSize="inherit" className="swipe-buttons-right" />
      </IconButton>
      <IconButton onClick={handleStar}>
        <StarRateIcon fontSize="inherit" className="swipe-buttons-star" />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
