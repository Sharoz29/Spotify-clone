import { combineReducers } from "redux";
import { userInfoReducer } from "./user/userReducer";
import { playlistsReducer } from "./playlists/playlistsReducer";
import { discoverReducer } from "./discoverweekly/discoverReducer";

export const rootReducer = combineReducers({
  userInfoReducer: userInfoReducer,
  playlistsReducer: playlistsReducer,
  discoverReducer: discoverReducer,
});
