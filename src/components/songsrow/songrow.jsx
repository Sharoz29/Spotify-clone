import "./songrow.css";
import { Fragment } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SongPlayingRow = ({ song }) => {
  const [show, setshow] = useState(false);

  const showIcon = () => {
    setshow(true);
  };
  const hideIcon = () => {
    setshow(false);
  };

  return (
    <Fragment>
      {song && (
        <div
          className="song-playing-row"
          onMouseEnter={showIcon}
          onMouseLeave={hideIcon}
        >
          <img
            src={song.album.images[0].url}
            alt=""
            className="song-playing-img"
          />
          <div className="song-playing-info">
            <h1 className="song-playing-name">{song.name}</h1>
            <div className="artist-album-info">
              <span className="song-artist-name">
                {song.artist?.map((singer) => singer.name).join(", ")}
              </span>
              <span className="song-album-name">{song.album.name}</span>
            </div>
          </div>
          {show && (
            <div className="songrow-icons-container">
              <PlayCircleFilledIcon className="song-playing-icon song-row-icon" />
              <FavoriteIcon className="song-liked-icon song-row-icon" />
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default SongPlayingRow;
