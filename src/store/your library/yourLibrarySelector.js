import { createSelector } from "reselect";

const yourLibraryState = (state) => state.yourLibraryReducer;

const yourLibrary = (yourLibraryReducer) => yourLibraryReducer.yourLibrary;

export const makeYourLibrary = createSelector(yourLibraryState, yourLibrary);
