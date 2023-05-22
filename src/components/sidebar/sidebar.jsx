import "./sidebar.css";
import SidebarOption from "../sidebaroption/sidebarOption";
import { Search } from "@mui/icons-material";
import { Home, LibraryMusic } from "@mui/icons-material";
import { createSelector } from "reselect";
import { makePlaylists } from "../../store/playlists/playlistsSelector";
import { useDispatch, useSelector } from "react-redux";
import { setHome } from "../../store/home/homeAction";
import { setSearch } from "../../store/search/searchAction";
import { setYourLibrary } from "../../store/your library/yourLibraryAction";

const playlistsSelector = createSelector(makePlaylists, (playlists) => ({
  playlists,
}));

const homeActionDispatcher = (dispatch) => ({
  setHome: (home) => dispatch(setHome(home)),
});
const searchActionDispatcher = (dispatch) => ({
  setSearch: (search) => dispatch(setSearch(search)),
});
const yourLibraryActionDispatcher = (dispatch) => ({
  setYourLibrary: (yourLibrary) => dispatch(setYourLibrary(yourLibrary)),
});

const Sidebar = () => {
  const { playlists } = useSelector(playlistsSelector);
  const { setHome } = homeActionDispatcher(useDispatch());
  const { setSearch } = searchActionDispatcher(useDispatch());
  const { setYourLibrary } = yourLibraryActionDispatcher(useDispatch());

  const homeRenderer = () => {
    setHome(true);
    setSearch(false);
    setYourLibrary(false);
  };

  const searchRenderer = () => {
    setHome(false);
    setSearch(true);
    setYourLibrary(false);
  };

  const yourLibraryRenderer = () => {
    setHome(false);
    setSearch(false);
    setYourLibrary(true);
  };

  return (
    <div className="sidebar">
      <img
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="spotify-logo"
        className="sidebar-logo"
      />
      <SidebarOption title="Home" Icon={Home} onClick={homeRenderer} />
      <SidebarOption title="Search" Icon={Search} onClick={searchRenderer} />
      <SidebarOption
        title="Your Library"
        Icon={LibraryMusic}
        onClick={yourLibraryRenderer}
      />
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
