import { createSelector } from "reselect";

const userInfoState = (state) => state.userInfoReducer;

const userInfo = (userInfoReducer) => userInfoReducer.userInfo;

export const makeCartItems = createSelector(userInfoState, userInfo);
