import { SET_SIDEBAR_STATE } from "../../constants/types";

const INITIAL_STATE = {
  isCollapsed: false,
};
export const sidebar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SIDEBAR_STATE:
      return {...state, isCollapsed: action.payload};
    default:
      return state;
  }
};