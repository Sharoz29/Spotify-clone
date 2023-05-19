import "./songrow.css";
import { Fragment } from "react";

const SongPlayingRow = ({ song }) => {
  return (
    <Fragment>
      {song && (
        <div className="song-playing-row">
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
        </div>
      )}
    </Fragment>
  );
};

export default SongPlayingRow;
