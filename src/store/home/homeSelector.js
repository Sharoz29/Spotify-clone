import { createSelector } from "reselect";

const homeState = (state) => state.homeReducer;

const home = (homeReducer) => homeReducer.home;

export const makeHome = createSelector(homeState, home);
