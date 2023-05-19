import { PLAYLISTS_TYPES } from "./playlistsTypes";

export const setPlaylists = (playlists) => ({
  type: PLAYLISTS_TYPES.SET_PLAYLISTS_TYPES,
  payload: playlists,
});
