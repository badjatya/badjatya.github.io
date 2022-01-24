// Importing Packages
import { ThemeProvider } from "styled-components";

// Redux
import { useSelector } from "react-redux";

const StyledThemeProvider = ({ children }) => {
  const color = useSelector((state) => state.styles.theme.color);
  const primary = useSelector((state) => state.styles.primary);
  const theme = {
    color,
    primary,
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
