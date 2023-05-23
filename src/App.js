import "./App.css";
import Login from "./components/login/login";
import { getTokenFromUrl } from "./spotify";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/player/player";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { setUserInfo } from "./store/user/userAction";

import { setPlaylists } from "./store/playlists/playlistAction";
import { makeToken } from "./store/token/tokenSelector";
import { setToken } from "./store/token/tokenAction";

export const spotify = new SpotifyWebApi();

const tokenSelector = createSelector(makeToken, (token) => ({
  token,
}));

const tokenActionDispatcher = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
});

const userInfoActionDispatcher = (dispatch) => ({
  setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
});

const playlistActionDispatcher = (dispatch) => ({
  setPlaylists: (playlists) => dispatch(setPlaylists(playlists)),
});

function App() {
  const { token } = useSelector(tokenSelector);
  const { setToken } = tokenActionDispatcher(useDispatch());

  const { setUserInfo } = userInfoActionDispatcher(useDispatch());

  const { setPlaylists } = playlistActionDispatcher(useDispatch());

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const recievedToken = hash.access_token;

    if (recievedToken) {
      setToken(recievedToken);

      spotify.setAccessToken(recievedToken);

      spotify.getMe().then((user) => {
        setUserInfo(user);
      });

      spotify.getUserPlaylists().then((playlists) => {
        setPlaylists(playlists);
      });
    }
  }, [token]);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
