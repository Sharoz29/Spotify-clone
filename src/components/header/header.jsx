import "./header.css";
import { useSelector } from "react-redux";
import { makeUserInfo } from "../../store/user/userSelector";
import { createSelector } from "reselect";
import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useState } from "react";

const userInfoSelector = createSelector(makeUserInfo, (userInfo) => ({
  userInfo,
}));

const Header = () => {
  const { userInfo } = useSelector(userInfoSelector);
  const [showSearch, setShowSearch] = useState(false);

  const clickHandler = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="header">
      <div className="header-left-container">
        <Search onClick={clickHandler} className="search-icon" />
        {showSearch && (
          <input
            type="text"
            placeholder="Search for Artists, Songs or Albums"
            className="searcher"
          />
        )}
      </div>
      <div className="header-right-container">
        <Avatar src={userInfo?.images[0]?.url} alt={userInfo?.display_name} />
        <h4>{userInfo?.display_name}</h4>
      </div>
    </div>
  );
};
export default Header;
