import "./player.css";
import Sidebar from "../sidebar/sidebar";
import Playbar from "../playbar/playbar";
import { makeHome } from "../../store/home/homeSelector";
import { makeSearch } from "../../store/search/searchSelector";
import { makeYourLibrary } from "../../store/your library/yourLibrarySelector";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import HomePage from "../homepage/homepage";
import YourLibrary from "../yourlibrary/yourlibrary";
import Searchpage from "../searchpage/searchpage";
import { useState } from "react";

const homeSelector = createSelector(makeHome, (home) => ({
  home,
}));

const searchSelector = createSelector(makeSearch, (search) => ({
  search,
}));

const yourLibrarySelector = createSelector(makeYourLibrary, (yourLibrary) => ({
  yourLibrary,
}));

const Player = () => {
  const { home } = useSelector(homeSelector);
  const { search } = useSelector(searchSelector);
  const { yourLibrary } = useSelector(yourLibrarySelector);

  const [searched, setSearched] = useState("");

  const handleSearching = (e) => {
    setSearched(e.target.value);
  };

  return (
    <div className="player-container">
      <div className="player-content">
        <Sidebar />
        {home && <HomePage />}
        {search && (
          <Searchpage handleSearching={handleSearching} searched={searched} />
        )}
        {yourLibrary && <YourLibrary />}
      </div>
      <Playbar />
    </div>
  );
};
export default Player;
