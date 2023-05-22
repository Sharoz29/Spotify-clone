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
  <div className="playbar">
    <div className="playbar-left-container">
      <img
        src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
        alt=""
        className="playbar-img"
      />
      <div className="playbar-song-info">
        <h4 className="currently-playing-song-title">My Fav Song</h4>
        <span className="currently-playing-song-name">Reminder</span>
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
  </div>;
};

export default Playbar;
