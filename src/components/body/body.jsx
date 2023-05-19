import "./body.css";
import Header from "../header/header";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import SongPlayingRow from "../songsrow/songrow";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { makeDiscoverWeekly } from "../../store/discoverweekly/discoverSelector";
import { Fragment } from "react";

const weeklyDiscoverSelector = createSelector(
  makeDiscoverWeekly,
  (discoverWeekly) => ({
    discoverWeekly,
  })
);

const Body = ({ spotify }) => {
  const { discoverWeekly } = useSelector(weeklyDiscoverSelector);

  console.log(discoverWeekly);
  return (
    <Fragment>
      {discoverWeekly.length !== 0 && (
        <div className="body">
          <Header spotify={spotify} />
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
            {discoverWeekly?.tracks?.items?.map((item) => (
              <SongPlayingRow song={item?.track} />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Body;
