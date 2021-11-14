import { SET_SIDEBAR_STATE } from "../../constants/types";

export const setSidebarState = (payload) => {
  return {
    type: SET_SIDEBAR_STATE,
    payload,
  };
};
