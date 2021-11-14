import { SET_THEME } from "../../constants/types";

export const setTheme = (payload) => {
  return {
    type: SET_THEME,
    payload,
  };
};
