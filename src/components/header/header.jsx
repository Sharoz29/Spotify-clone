import "./header.css";
import { useSelector } from "react-redux";
import { makeUserInfo } from "../../store/user/userSelector";
import { createSelector } from "reselect";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

const userInfoSelector = createSelector(makeUserInfo, (userInfo) => ({
  userInfo,
}));

const Header = () => {
  const { userInfo } = useSelector(userInfoSelector);

  return (
    <div className="header">
      <div className="header-left-container">
        <Search />
        <input type="text" placeholder="Search for Artists, Songs or Albums" />
      </div>
      <div className="header-right-container">
        <Avatar src={userInfo?.images[0]?.url} alt={userInfo?.display_name} />
        <h4>{userInfo?.display_name}</h4>
      </div>
    </div>
  );
};
export default Header;
