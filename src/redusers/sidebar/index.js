import { SET_MENU_ITEM, SET_SIDEBAR_STATE } from "../../constants/types";

const INITIAL_STATE = {
  isCollapsed: false,
  activeItem: '1_1',
};
export const sidebar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SIDEBAR_STATE:
      return { ...state, isCollapsed: action.payload };
    case SET_MENU_ITEM:
      return { ...state, activeItem: action.payload };
    default:
      return state;
  }
};
