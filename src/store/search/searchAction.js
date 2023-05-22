import { SEARCH_TYPE } from "./searchTypes";

export const setSearch = (search) => ({
  type: SEARCH_TYPE.SET_SEARCH_TYPES,
  payload: search,
});
