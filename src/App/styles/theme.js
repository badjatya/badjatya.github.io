// Importing Packages
import { ThemeProvider } from "styled-components";

// Redux
import { useSelector } from "react-redux";

const StyledThemeProvider = ({ children }) => {
  const color = useSelector((state) => state.styles.theme.color);
  const theme = {
    color,
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
