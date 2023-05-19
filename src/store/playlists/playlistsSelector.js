import { createSelector } from "reselect";

const playListState = (state) => state.playlistsReducer;

const playlists = (playlistsReducer) => playlistsReducer.playlists;

export const makePlaylists = createSelector(playListState, playlists);
