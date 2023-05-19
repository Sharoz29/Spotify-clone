import { PLAYLISTS_TYPES } from "./playlistsTypes";

const INITIAL_STATE = {
  playlists: [],
};
export const playlistsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case PLAYLISTS_TYPES.SET_PLAYLISTS_TYPES:
      return {
        ...state,
        playlists: payload,
      };
    default:
      return state;
  }
};
