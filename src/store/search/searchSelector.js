import { createSelector } from "reselect";

const searchState = (state) => {
  console.log(state.searchReducer);
  return state.searchReducer;
};

const searched = (searchReducer) => {
  return searchReducer.search;
};

export const makeSearch = createSelector(searchState, searched);
