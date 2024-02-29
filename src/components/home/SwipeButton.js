import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import ReplayIcon from "@mui/icons-material/Replay";
import StarRateIcon from "@mui/icons-material/StarRate";
import "./SwipeButton.css";

function SwipeButton({ tinderCardRef }) {
  return (
    <div className="swipe-buttons">
      <IconButton onClick={() => tinderCardRef.current.refresh()}>
        <ReplayIcon fontSize="inherit" className="swipe-buttons-repeat" />
      </IconButton>
      <IconButton onClick={() => tinderCardRef.current.swipe("left")}>
        <CloseIcon fontSize="inherit" className="swipe-buttons-left" />
      </IconButton>
      <IconButton onClick={() => tinderCardRef.current.swipe("right")}>
        <FavoriteIcon fontSize="inherit" className="swipe-buttons-right" />
      </IconButton>
      <IconButton onClick={() => tinderCardRef.current.star()}>
        <StarRateIcon fontSize="inherit" className="swipe-buttons-star" />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
