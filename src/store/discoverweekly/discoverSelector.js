import { createSelector } from "reselect";

const weeklyDiscoverState = (state) => state.discoverReducer;

const discoverWeekly = (discoverReducer) => discoverReducer.discoverWeekly;

export const makeDiscoverWeekly = createSelector(
  weeklyDiscoverState,
  discoverWeekly
);
