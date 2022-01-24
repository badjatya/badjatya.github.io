// Action types
import {
  TOGGLE_NAVIGATION,
  TOGGLE_SETTING,
  SET_LIGHT_THEME,
  SET_DARK_THEME,
  SET_PRIMARY_COLOR,
} from "../types/style.types";

export const toggleNavigation = () => {
  return {
    type: TOGGLE_NAVIGATION,
  };
};

export const toggleSetting = () => {
  return {
    type: TOGGLE_SETTING,
  };
};

export const setLightTheme = () => {
  return {
    type: SET_LIGHT_THEME,
    payload: {
      bg_900: "#000000",
      bg_100: "#dddddd",
      bg_50: "#eff0f4",
      bf_opacity: "rgba(255, 255, 255, 0.5)",
      text_900: "#000000",
      text_700: "#555555",
      text_600: "#666666",
      text_300: "#bbbbbb",
      outer_shadow: "3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8",
      outer_shadow_0: "0 0 0 #d0d0d0, 0 0 0 #f8f8f8",
      inner_shadow: "inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8",
      inner_shadow_0: "inset 0 0 0 #d0d0d0, inset 0 0 0 #f8f8f8",
    },
  };
};

export const setDarkTheme = () => {
  return {
    type: SET_DARK_THEME,
    payload: {
      bg_900: "#ffffff",
      bg_100: "#353535",
      bg_50: "#2b2c2f",
      bf_opacity: "rgba(43, 44, 47, 0.5)",
      text_900: "#ffffff",
      text_700: "#ffffff",
      text_600: "#bbbbbb",
      text_300: "#bbbbbb",
      outer_shadow: "3px 3px 3px #222327, -3px -3px 3px #363636",
      outer_shadow_0: "0 0 0 #222327, 0 0 0 #363636",
      inner_shadow: "inset 3px 3px 3px #222327, inset -3px -3px 3px #363636",
      inner_shadow_0: "inset 0 0 0 #222327, inset 0 0 0 #363636",
    },
  };
};

export const setPrimaryColor = (color) => {
  return {
    type: SET_PRIMARY_COLOR,
    payload: color,
  };
};
