import "./player.css";
import Sidebar from "../sidebar/sidebar";
import Body from "../body/body";
import Playbar from "../playbar/playbar";

const Player = ({ spotify }) => {
  return (
    <div className="player-container">
      <div className="player-content">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Playbar />
    </div>
  );
};
export default Player;
