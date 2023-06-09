import { combineReducers } from "redux";
import { userInfoReducer } from "./user/userReducer";
import { playlistsReducer } from "./playlists/playlistsReducer";
import homeReducer from "./home/homeReducer";
import { searchReducer } from "./search/searchReducer";
import { yourLibraryReducer } from "./your library/yourLibraryReducer";
import { tokenReducer } from "./token/tokenReducer";

export const rootReducer = combineReducers({
  userInfoReducer: userInfoReducer,
  playlistsReducer: playlistsReducer,
  homeReducer: homeReducer,
  searchReducer: searchReducer,
  yourLibraryReducer: yourLibraryReducer,
  tokenReducer: tokenReducer,
});
