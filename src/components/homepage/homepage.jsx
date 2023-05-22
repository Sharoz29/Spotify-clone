import "./homepage.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { createSelector } from "reselect";
import { makePlaylists } from "../../store/playlists/playlistsSelector";
import { useSelector } from "react-redux";
import GreetingCard from "../greetingcard/greetingcard";
import AlbumCard from "../albumcard/albumcard";
import SpotifyWebApi from "spotify-web-api-js";
import { makeToken } from "../../store/token/tokenSelector";
import { useState, useEffect } from "react";
import ArtistCard from "../artistcard/artistcard";

const playlistsSelector = createSelector(makePlaylists, (playlists) => ({
  playlists,
}));

const tokenSelector = createSelector(makeToken, (token) => ({
  token,
}));

const HomePage = () => {
  const [playlist1, setPlaylist1] = useState([]);
  const [playlist2, setPlaylist2] = useState([]);
  const [playlist3, setPlaylist3] = useState([]);
  const [playlist4, setPlaylist4] = useState([]);
  const [artists, setArtists] = useState([]);
  const [playlist5, setPlaylist5] = useState([]);

  const { playlists } = useSelector(playlistsSelector);
  const { token } = useSelector(tokenSelector);

  useEffect(() => {
    const spotify = new SpotifyWebApi();
    if (token) {
      spotify.setAccessToken(token);

      spotify
        .getArtistAlbums("27gtK7m9vYwCyJ04zz0kIb")
        .then((album) => setPlaylist1(album));

      spotify
        .getFeaturedPlaylists()
        .then((album) => setPlaylist2(album.playlists));

      spotify
        .getCategoryPlaylists("0JQ5DAqbMKFAXlCG6QvYQ4")
        .then((cat) => setPlaylist4(cat.playlists));

      spotify
        .getCategoryPlaylists("0JQ5DAqbMKFEC4WFtoNRpw")
        .then((cat) => setPlaylist3(cat.playlists));

      spotify.getMyTopArtists().then((artist) => setArtists(artist));

      spotify
        .getArtistAlbums("3TVXtAsR1Inumwj472S9r4")
        .then((art) => setPlaylist5(art));
    }
  }, [token]);

  return (
    <div className="home-page-container">
      <div className="arrow-container">
        <ArrowBackIosIcon style={{ color: "white" }} className="arrow left" />
        <ArrowForwardIosIcon
          style={{ color: "white" }}
          className="arrow right"
        />
      </div>
      <div className="greetings-container">
        <h1 className="greetings-title">Good Evening</h1>
        <div className="greetings-content">
          {playlists?.items?.map((item, i) => (
            <GreetingCard song={item} key={i} id={i} />
          ))}
        </div>
      </div>
      <div className="daily-mixes-container">
        <h1 className="daily-mix-title">Made For You</h1>
        <div className="daily-mixes">
          {playlist1?.items?.map((item, i) => (
            <AlbumCard album={item} key={i} id={i} showAll={false} />
          ))}
        </div>
      </div>
      <div className="daily-mixes-container">
        <h1 className="daily-mix-title">Top mixes for you</h1>
        <div className="daily-mixes">
          {playlist2?.items?.map((item, i) => (
            <AlbumCard album={item} key={i} id={i} showAll={false} />
          ))}
        </div>
      </div>
      <div className="daily-mixes-container">
        <h1 className="daily-mix-title">Hip-Hop Hottest</h1>
        <div className="daily-mixes">
          {playlist3?.items?.map((item, i) => (
            <AlbumCard album={item} key={i} id={i} showAll={false} />
          ))}
        </div>
      </div>
      <div className="daily-mixes-container">
        <h1 className="daily-mix-title">Breaking a Sweat</h1>
        <div className="daily-mixes">
          {playlist4?.items?.map((item, i) => (
            <AlbumCard album={item} key={i} id={i} showAll={false} />
          ))}
        </div>
      </div>
      <div className="daily-mixes-container">
        <h1 className="daily-mix-title">Your Top Artists</h1>
        <div className="daily-mixes">
          {artists?.items?.map((artist, i) => (
            <ArtistCard artist={artist} key={i} id={i} showAll={false} />
          ))}
        </div>
      </div>
      <div className="daily-mixes-container">
        <h1 className="daily-mix-title">More From Drake</h1>
        <div className="daily-mixes">
          {playlist5?.items?.map((item, i) => (
            <AlbumCard album={item} key={i} id={i} showAll={false} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
