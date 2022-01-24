import React from "react";

// IMPORTING Redux and root reducer
import { Provider, useDispatch } from "react-redux";
import { setDarkTheme, setLightTheme } from "./App/redux/actions/style.action";
import store from "./App/redux/store";

// Importing Styles
import GlobalStyle from "./App/styles/globalStyles";
import StyledThemeProvider from "./App/styles/theme";

function App() {
  return (
    <>
      <Provider store={store}>
        <StyledThemeProvider>
          <GlobalStyle />
          <h1 style={{ color: "#fff", fontSize: "4rem" }} className="logo">
            B<span>adjatya</span>
          </h1>
          <Container />
        </StyledThemeProvider>
      </Provider>
    </>
  );
}

const Container = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p>Hey</p>

      <button onClick={() => dispatch(setDarkTheme())}>Dark Theme</button>
      <br />
      <button onClick={() => dispatch(setLightTheme())}>Light Theme</button>
    </>
  );
};

export default App;
