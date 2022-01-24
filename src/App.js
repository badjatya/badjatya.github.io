// IMPORTING Redux and root reducer
import { Provider } from "react-redux";
import store from "./App/redux/store";

// Importing Router
import Router from "./App/routes/router";

// Importing Styles
import GlobalStyle from "./App/styles/globalStyles";
import StyledThemeProvider from "./App/styles/theme";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <StyledThemeProvider>
          <GlobalStyle />
          <Router />
        </StyledThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
