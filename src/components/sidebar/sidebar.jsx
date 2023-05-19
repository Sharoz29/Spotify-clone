import "./sidebar.css";
import SidebarOption from "../sidebaroption/sidebarOption";
import { Home } from "@material-ui/icons";
import { Search } from "@mui/icons-material";
import { LibraryMusic } from "@material-ui/icons";
import { createSelector } from "reselect";
import { makePlaylists } from "../../store/playlists/playlistsSelector";
import { useSelector } from "react-redux";

const playlistsSelector = createSelector(makePlaylists, (playlists) => ({
  playlists,
}));

const Sidebar = () => {
  const { playlists } = useSelector(playlistsSelector);

  return (
    <div className="sidebar">
      <img
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="spotify-logo"
        className="sidebar-logo"
      />
      <SidebarOption title="Home" Icon={Home} />
      <SidebarOption title="Search" Icon={Search} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />
      <br />
      <strong className="sidebar-title">playlists</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
};
export default Sidebar;
