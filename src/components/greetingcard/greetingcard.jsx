import "./greetingcard.css";
import { useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Fragment } from "react";

const GreetingCard = ({ song, id }) => {
  const [playButton, setPlayButton] = useState(false);

  const showingButton = () => {
    setPlayButton(true);
  };
  const hidingButton = () => {
    setPlayButton(false);
  };

  return (
    <Fragment>
      {id <= 3 && (
        <div
          className="greeting-card-container"
          onMouseEnter={showingButton}
          onMouseLeave={hidingButton}
        >
          <div className="greeting-card-img-container">
            <img
              src={song?.images[0]?.url}
              alt=""
              className="greeting-card-image"
            />
          </div>
          <div className="greeting-card-title">
            <h4>{song.name}</h4>
          </div>
          {playButton && (
            <PlayCircleFilledIcon
              style={{ color: "#1db954", fontSize: "large" }}
              className="play-btn"
            />
          )}
        </div>
      )}
    </Fragment>
  );
};
export default GreetingCard;
