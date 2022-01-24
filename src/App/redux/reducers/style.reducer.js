// Data
import { colorData } from "../../data/theme.data";
import { navData } from "../../data/nav.data";

// Action types
import {
  TOGGLE_NAVIGATION,
  TOGGLE_SETTING,
  SET_LIGHT_THEME,
  SET_DARK_THEME,
  SET_PRIMARY_COLOR,
  SET_NAV_ACTIVE,
} from "../types/style.types";

const initialState = {
  showNavigation: false,
  showSetting: false,
  theme: {
    mode: "Dark",
    color: colorData,
  },
  primary: "#FB839E",
  nav: navData,
};

// Style reducer
const styleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_NAVIGATION:
      return {
        ...state,
        showSetting: false,
        showNavigation: !state.showNavigation,
      };
    case TOGGLE_SETTING:
      return {
        ...state,
        showNavigation: false,
        showSetting: !state.showSetting,
      };
    case SET_LIGHT_THEME:
      return { ...state, theme: { mode: "Light", color: payload } };
    case SET_DARK_THEME:
      return { ...state, theme: { mode: "Dark", color: payload } };
    case SET_PRIMARY_COLOR:
      return { ...state, primary: payload };
    case SET_NAV_ACTIVE:
      const updatedNav = state.nav.map((item) => {
        if (item.id === payload) {
          item.active = true;
          return item;
        } else {
          item.active = false;
          return item;
        }
      });
      return { ...state, nav: updatedNav };

    default:
      return state;
  }
};

export default styleReducer;
