import "./body.css";
import Header from "../header/header";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@mui/icons-material";
import SongPlayingRow from "../songsrow/songrow";
import { Fragment } from "react";

const Body = ({ discoverWeekly }) => {
  return (
    <Fragment>
      {discoverWeekly.length !== 0 && (
        <div className="body">
          <Header />
          <div className="body-info-container">
            <img
              src={discoverWeekly?.images[0]?.url}
              alt=""
              className="body-info-img"
            />
            <div className="body-info">
              <strong className="playlist-title">playlists</strong>
              <h2 className="discover-title">Discover Weekly</h2>
              <span className="discover-content">
                {discoverWeekly?.description}
              </span>
            </div>
          </div>
          <div className="body-songs-container">
            <div className="body-songs-icons">
              <PlayCircleFilled className="body-songs-shuffle" />
              <Favorite fontSize="large" />
              <MoreHoriz />
            </div>
            {discoverWeekly?.tracks?.items?.map((item, i) => (
              <SongPlayingRow song={item?.track} key={i} />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Body;
