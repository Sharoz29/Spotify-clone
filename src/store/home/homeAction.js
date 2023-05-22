import { HOME_TYPE } from "./homeTypes";

export const setHome = (home) => ({
  type: HOME_TYPE.SET_HOME_PAGE,
  payload: home,
});
