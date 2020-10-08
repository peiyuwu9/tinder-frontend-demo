import React from "react";
import "./SwipeButton.css";

import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from "@material-ui/icons/Replay";
import StarRateIcon from "@material-ui/icons/StarRate";

function SwipeButton() {
  return (
    <div className="swipe-buttons">
      <IconButton>
        <ReplayIcon fontSize="large" className="swipe-buttons-repeat" />
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" className="swipe-buttons-left" />
      </IconButton>
      <IconButton>
        <StarRateIcon fontSize="large" className="swipe-buttons-star" />
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize="large" className="swipe-buttons-right" />
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize="large" className="swipe-buttons-lightning" />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
