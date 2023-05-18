import "./App.css";
import Login from "./components/login/login";
import { getTokenFromUrl } from "./spotify";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const recievedToken = hash.access_token;

    if (recievedToken) {
      setToken(recievedToken);
      spotify.setAccessToken(recievedToken);
    }

    console.log("token", token);
  }, [token]);

  return <div className="App">{token ? <h1>Logged In</h1> : <Login />}</div>;
}

export default App;
