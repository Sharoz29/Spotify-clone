import "./yourlibrary.css";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { makePlaylists } from "../../store/playlists/playlistsSelector";
import AlbumCard from "../albumcard/albumcard";
import { makeToken } from "../../store/token/tokenSelector";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const playlistsSelector = createSelector(makePlaylists, (playlists) => ({
  playlists,
}));
const tokenSelector = createSelector(makeToken, (token) => ({
  token,
}));

const YourLibrary = () => {
  const { playlists } = useSelector(playlistsSelector);
  const { token } = useSelector(tokenSelector);
  const [artist, setArtists] = useState([]);

  useEffect(() => {
    const spotify = new SpotifyWebApi();
    if (token) {
      spotify.setAccessToken(token);

      spotify.getMyTopArtists().then((artist) => setArtists(artist));
    }
  }, [token]);

  return (
    <div className="your-library-container">
      <div className="your-library-options">
        <span className="option">Playlists</span>
        <span className="option">Artists</span>
        <span className="option">Albums</span>
      </div>
      <h1 className="your-library-title">Playlists</h1>
      <div className="daily-mixes full">
        {playlists?.items?.map((item, i) => (
          <AlbumCard album={item} key={i} id={i} showAll={true} />
        ))}{" "}
      </div>
    </div>
  );
};

export default YourLibrary;

//Make upper header and import user
