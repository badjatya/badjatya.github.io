import React from "react";

// IMPORTING Redux and root reducer
import { Provider, useSelector } from "react-redux";
import store from "./App/redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Hello />
      </Provider>
    </>
  );
}

const Hello = () => {
  const data = useSelector((state) => state.styles.showNavigation);
  console.log(data);
  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
};

export default App;
