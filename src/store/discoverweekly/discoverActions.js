import { DISCOVER_WEEKLY_TYPES } from "./discoverTypes";

export const setDiscoverWeekly = (discoverWeekly) => ({
  type: DISCOVER_WEEKLY_TYPES.SET_DISCOVER_WEEKLY,
  payload: discoverWeekly,
});
