import "./playbar.css";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  PlaylistPlay,
  Shuffle,
  Repeat,
  VolumeDown,
} from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";

const Playbar = () => {
  return (
    <div className="playbar">
      <div className="playbar-left-container">
        <img
          src="https://e-cdn-images.dzcdn.net/images/cover/134778e4c4f19ea71c82408300925a9a/264x264-000000-80-0-0.jpg"
          alt="reminder"
          className="playbar-img"
        />
        <div className="playbar-song-info">
          <h4 className="currently-playing-song-title">Reminder</h4>
          <span className="currently-playing-song-name">
            The Weeknd, Daft Punk
          </span>
        </div>
      </div>
      <div className="playbar-center-container">
        <Shuffle className="playbar-green" />
        <SkipPrevious className="playbar-icon" />
        <PlayCircleOutline fontSize="large" className="playbar-icon" />
        <SkipNext className="playbar-icon" />
        <Repeat className="playbar-green" />
      </div>
      <div className="playbar-right-container">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Playbar;
