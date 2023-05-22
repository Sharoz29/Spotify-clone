import { createSelector } from "reselect";

const searchState = (state) => state.searchReducer;

const search = (searchReducer) => searchReducer.search;

export const makeSearch = createSelector(searchState, search);
