import "./App.css";
import Login from "./components/login/login";
import { getTokenFromUrl } from "./spotify";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/player/player";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeUserInfo } from "./store/user/userSelector";
import { setUserInfo } from "./store/user/userAction";
import { makeDiscoverWeekly } from "./store/discoverweekly/discoverSelector";
import { setDiscoverWeekly } from "./store/discoverweekly/discoverActions";
import { setPlaylists } from "./store/playlists/playlistAction";
import { makePlaylists } from "./store/playlists/playlistsSelector";

const spotify = new SpotifyWebApi();

const userInfoSelector = createSelector(makeUserInfo, (userInfo) => ({
  userInfo,
}));

const userInfoActionDispatcher = (dispatch) => ({
  setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
});

const playlistsSelector = createSelector(makePlaylists, (playlists) => ({
  playlists,
}));

const playlistActionDispatcher = (dispatch) => ({
  setPlaylists: (playlists) => dispatch(setPlaylists(playlists)),
});

const weeklyDiscoverSelector = createSelector(
  makeDiscoverWeekly,
  (discoverWeekly) => ({
    discoverWeekly,
  })
);

const weeklyDiscoverActionDispatch = (dispatch) => ({
  setDiscoverWeekly: (discoverWeekly) =>
    dispatch(setDiscoverWeekly(discoverWeekly)),
});

function App() {
  const [token, setToken] = useState(null);

  const { userInfo } = useSelector(userInfoSelector);
  const { setUserInfo } = userInfoActionDispatcher(useDispatch());

  const { playlists } = useSelector(playlistsSelector);
  const { setPlaylists } = playlistActionDispatcher(useDispatch());

  const { discoverWeekly } = useSelector(weeklyDiscoverSelector);
  const { setDiscoverWeekly } = weeklyDiscoverActionDispatch(useDispatch());

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const recievedToken = hash.access_token;

    // console.log(hash);

    if (recievedToken) {
      setToken(recievedToken);

      spotify.setAccessToken(recievedToken);

      spotify.getMe().then((user) => {
        setUserInfo(user);
      });

      spotify.getUserPlaylists().then((playlists) => {
        setPlaylists(playlists);
      });
      spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlist) => {
        setDiscoverWeekly(playlist);
      });
    }
  }, [token]);

  console.log(userInfo, playlists, discoverWeekly);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
