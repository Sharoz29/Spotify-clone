import "./searchpage.css";
import { createSelector } from "reselect";
import { makeToken } from "../../store/token/tokenSelector";
import { useSelector } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import { Fragment, useEffect, useState } from "react";
import CategoryCard from "../categorycard/categorycard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AlbumCard from "../albumcard/albumcard";

const tokenSelector = createSelector(makeToken, (token) => ({
  token,
}));

const Searchpage = () => {
  const { token } = useSelector(tokenSelector);
  const [categories, setCategories] = useState([]);
  const [searched, setSeached] = useState("");
  const [searchedAlbum, setSearchedAlbum] = useState([]);

  const handleSearching = (e) => {
    setSeached(e.target.value);
  };

  useEffect(() => {
    const spotify = new SpotifyWebApi();
    if (token) {
      spotify.setAccessToken(token);

      spotify
        .getCategories()
        .then((cat) => setCategories(cat.categories.items));

      searched.length !== 0
        ? spotify
            .searchAlbums(searched)
            .then((album) => setSearchedAlbum(album.albums))
        : setSearchedAlbum([]);
    }
  }, [token, categories, searched, searchedAlbum]);

  return (
    <div className="categories-container">
      <div className="top-bar">
        <form
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <SearchOutlinedIcon className="searcher-icon" />
          <input
            type="search"
            placeholder="Artists, songs, or podcasts"
            className="searchbar"
            onChange={handleSearching}
          />
        </form>
      </div>
      {searchedAlbum.length === 0 ? (
        <Fragment>
          <h1 className="browse-title">Browse All</h1>
          <div className="category-cards-container">
            {categories?.map((category, i) => (
              <CategoryCard category={category} key={i} />
            ))}
          </div>
        </Fragment>
      ) : (
        <div className="category-cards-container">
          {searchedAlbum?.map((album) => (
            <AlbumCard album={album} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Searchpage;
