import React from "react";

// IMPORTING Redux and root reducer
import { Provider } from "react-redux";
import store from "./App/redux/store";

// Importing Styles
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./App/styles/globalStyles";
import theme from "./App/styles/theme";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <h1 style={{ color: "#fff", fontSize: "4rem" }} className="logo">
            B<span>adjatya</span>
          </h1>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
