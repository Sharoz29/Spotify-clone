import "./yourlibrary.css";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { makePlaylists } from "../../store/playlists/playlistsSelector";
import AlbumCard from "../albumcard/albumcard";
import { makeToken } from "../../store/token/tokenSelector";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { Fragment } from "react";
import ArtistCard from "../artistcard/artistcard";

const playlistsSelector = createSelector(makePlaylists, (playlists) => ({
  playlists,
}));
const tokenSelector = createSelector(makeToken, (token) => ({
  token,
}));

const YourLibrary = () => {
  const { playlists } = useSelector(playlistsSelector);
  const { token } = useSelector(tokenSelector);
  const [artists, setArtists] = useState([]);
  const [album, setAlbum] = useState([]);
  const [activePlaylist, setActivePlaylist] = useState(true);
  const [activeArtists, setActiveArtists] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(false);

  useEffect(() => {
    const spotify = new SpotifyWebApi();
    if (token) {
      spotify.setAccessToken(token);

      spotify.getMySavedAlbums().then((album) => setAlbum(album.items));

      spotify.getMyTopArtists().then((artist) => setArtists(artist.items));
    }
  }, [token]);

  const settingPlaylistActive = () => {
    setActivePlaylist(true);
    setActiveAlbum(false);
    setActiveArtists(false);
  };
  const settingArtistActive = () => {
    setActivePlaylist(false);
    setActiveAlbum(false);
    setActiveArtists(true);
  };
  const settingAlbumActive = () => {
    setActivePlaylist(false);
    setActiveAlbum(true);
    setActiveArtists(false);
  };

  return (
    <div className="your-library-container">
      <div className="your-library-options-container">
        <div className="your-library-options">
          <span
            className={`option ${activePlaylist}`}
            onClick={settingPlaylistActive}
          >
            Playlists
          </span>
          <span
            className={`option ${activeArtists}`}
            onClick={settingArtistActive}
          >
            Artists
          </span>
          <span
            className={`option ${activeAlbum}`}
            onClick={settingAlbumActive}
          >
            Albums
          </span>
        </div>
      </div>
      {activePlaylist && (
        <Fragment>
          <h1 className="your-library-title">Playlists</h1>
          <div className="daily-mixes full">
            {playlists?.items?.map((item, i) => (
              <AlbumCard album={item} key={i} id={i} showAll={true} />
            ))}{" "}
          </div>
        </Fragment>
      )}
      {activeArtists && (
        <Fragment>
          <h1 className="your-library-title">Artists</h1>
          <div className="daily-mixes full">
            {artists?.map((artist, i) => (
              <ArtistCard artist={artist} key={i} id={i} showAll={true} />
            ))}
          </div>
        </Fragment>
      )}
      {activeAlbum && (
        <Fragment>
          <h1 className="your-library-title">Albums</h1>
          <div className="daily-mixes full">
            {album?.map((album, i) => (
              <AlbumCard album={album.album} key={i} showAll={true} />
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default YourLibrary;
