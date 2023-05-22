import { YOUR_LIBRARY_TYPE } from "./yourLibraryTypes";

export const setYourLibrary = (yourLibrary) => ({
  type: YOUR_LIBRARY_TYPE.SET_YOUR_LIBRARY,
  payload: yourLibrary,
});
