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
import YourLibrary from "../yourlibrary/yourlibrary";
import { makeDiscoverWeekly } from "../../store/discoverweekly/discoverSelector";

const homeSelector = createSelector(makeHome, (home) => ({
  home,
}));

const searchSelector = createSelector(makeSearch, (search) => ({
  search,
}));

const yourLibrarySelector = createSelector(makeYourLibrary, (yourLibrary) => ({
  yourLibrary,
}));

const weeklyDiscoverSelector = createSelector(
  makeDiscoverWeekly,
  (discoverWeekly) => ({
    discoverWeekly,
  })
);

const Player = () => {
  const { home } = useSelector(homeSelector);
  const { search } = useSelector(searchSelector);
  const { yourLibrary } = useSelector(yourLibrarySelector);
  const { discoverWeekly } = useSelector(weeklyDiscoverSelector);

  return (
    <div className="player-container">
      <div className="player-content">
        <Sidebar />
        {home && <HomePage />}
        {search && <Body discoverWeekly={discoverWeekly} />}
        {yourLibrary && <YourLibrary />}
      </div>
      <Playbar />
    </div>
  );
};
export default Player;
