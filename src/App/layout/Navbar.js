// Importing Packages
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

// Actions
import {
  toggleNavigation,
  setDarkTheme,
  setLightTheme,
} from "../redux/actions/style.action";

// Components
import RoundedButton from "../components/RoundedButton";

// Icons
import { FaBars, FaCog, FaSun, FaMoon, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // State
  const showNavigation = useSelector((state) => state.styles.showNavigation);
  const theme = useSelector((state) => state.styles.theme.mode);

  // Dispatch
  const dispatch = useDispatch();
  return (
    <StyledNavbar>
      <StyledLogo>
        B<span>adjatya</span>
      </StyledLogo>
      <StyledRoundedButtonContainer>
        {/* Setting the dark or light theme  */}
        {theme === "Dark" ? (
          <RoundedButton onClick={() => dispatch(setLightTheme())}>
            <FaSun />
          </RoundedButton>
        ) : (
          <RoundedButton onClick={() => dispatch(setDarkTheme())}>
            <FaMoon />
          </RoundedButton>
        )}

        <RoundedButton>
          <FaCog />
        </RoundedButton>

        {/* Toggling the navigation to show nav or not  */}
        {showNavigation ? (
          <RoundedButton onClick={() => dispatch(toggleNavigation())}>
            <FaTimes />
          </RoundedButton>
        ) : (
          <RoundedButton onClick={() => dispatch(toggleNavigation())}>
            <FaBars />
          </RoundedButton>
        )}
      </StyledRoundedButtonContainer>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 80px;
  width: 100%;
  padding: 20px 15px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.p`
  font-size: 3rem;
  color: ${({ theme }) => theme.primary};
  font-family: "Mea Culpa", cursive;

  span: {
    font-family: "MonteCarlo", cursive;
  }
`;

const StyledRoundedButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
