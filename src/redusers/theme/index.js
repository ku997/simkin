import { THEME_DARK } from "../../constants";
import { SET_THEME } from "../../constants/types";

const INITIAL_STATE = THEME_DARK;
export const theme = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
};