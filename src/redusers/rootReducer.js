import { combineReducers } from "redux";
import { getAuthUser } from "./users/getAuthUser";
import { getUsers } from "./users/getUsers";
import { sidebar as sidebarReduser } from "./sidebar";
import { theme as themeReduser } from "./theme";


export const rootReducer = combineReducers({
  authUser: getAuthUser,
  users: getUsers,
  sidebar: sidebarReduser,
  theme: themeReduser,
});
