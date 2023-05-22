import "./player.css";
import Sidebar from "../sidebar/sidebar";
import Body from "../body/body";
import Playbar from "../playbar/playbar";
import { makeHome } from "../../store/home/homeSelector";
import { makeSearch } from "../../store/search/searchSelector";
import { makeYourLibrary } from "../../store/your library/yourLibrarySelector";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import HomePage from "../homepage/homepage";

const homeSelector = createSelector(makeHome, (home) => ({
  home,
}));

const searchSelector = createSelector(makeSearch, (search) => ({
  search,
}));

const yourLibrarySelector = createSelector(makeYourLibrary, (yourLibrary) => ({
  yourLibrary,
}));

const Player = ({ spotify }) => {
  const { home } = useSelector(homeSelector);
  const { search } = useSelector(searchSelector);
  const { yourLibrary } = useSelector(yourLibrarySelector);

  console.log(home, search, yourLibrary);

  return (
    <div className="player-container">
      <div className="player-content">
        <Sidebar />
        {home && <HomePage />}
        {search && <Body spotify={spotify} />}
      </div>
      <Playbar />
    </div>
  );
};
export default Player;
