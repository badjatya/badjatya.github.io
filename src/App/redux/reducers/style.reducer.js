// Data
import { colorData } from "../../data/theme.data";

// Action types
import {
  TOGGLE_NAVIGATION,
  SET_LIGHT_THEME,
  SET_DARK_THEME,
  SET_PRIMARY_COLOR,
} from "../types/style.types";

const initialState = {
  showNavigation: false,
  theme: {
    mode: "Dark",
    color: colorData,
  },
  primary: "#FB839E",
};

// Style reducer
const styleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_NAVIGATION:
      return { ...state, showNavigation: !state.showNavigation };
    case SET_LIGHT_THEME:
      return { ...state, theme: { mode: "Light", color: payload } };
    case SET_DARK_THEME:
      return { ...state, theme: { mode: "Dark", color: payload } };
    case SET_PRIMARY_COLOR:
      return { ...state, primary: payload };

    default:
      return state;
  }
};

export default styleReducer;
