import { createSelector } from "reselect";

const tokenState = (state) => state.tokenReducer;

const token = (tokenReducer) => tokenReducer.token;

export const makeToken = createSelector(tokenState, token);
