import { SET_MENU_ITEM, SET_SIDEBAR_STATE } from "../../constants/types";

export const setSidebarState = (payload) => {
  return {
    type: SET_SIDEBAR_STATE,
    payload,
  };
};

export const setActiveItem = (payload) => {
  return {
    type: SET_MENU_ITEM,
    payload,
  };
};
