// Importing Packages
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

// Actions
import {
  toggleNavigation,
  toggleSetting,
  setDarkTheme,
  setLightTheme,
  setPrimaryColor,
} from "../redux/actions/style.action";

// Components
import RoundedButton from "../components/RoundedButton";
import Nav from "./Nav";

// Icons / Data / Animation
import { FaBars, FaCog, FaSun, FaMoon, FaTimes } from "react-icons/fa";
import { primaryColorData } from "../data/theme.data";
import { sideNavAnimation } from "../styles/animation";

const Navbar = () => {
  // State
  const showNavigation = useSelector((state) => state.styles.showNavigation);
  const showSetting = useSelector((state) => state.styles.showSetting);
  const theme = useSelector((state) => state.styles.theme.mode);

  // Dispatch
  const dispatch = useDispatch();
  return (
    <StyledNavbar>
      <StyledLogo to="/">
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

        <RoundedButton onClick={() => dispatch(toggleSetting())}>
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

      <AnimatePresence>{showNavigation && <Nav />}</AnimatePresence>

      <AnimatePresence>
        {showSetting && (
          <StyledSwitcher
            variants={sideNavAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            className="outer-shadow"
          >
            <h4>Theme Colors</h4>

            <div className="card-container">
              {primaryColorData.map(({ id, color }) => (
                <StyledCard
                  onClick={() => dispatch(setPrimaryColor(color))}
                  key={id}
                  color={color}
                />
              ))}
            </div>
          </StyledSwitcher>
        )}
      </AnimatePresence>
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
  position: relative;
`;

const StyledLogo = styled(Link)`
  font-size: 3rem;
  color: ${({ theme }) => theme.primary};
  font-family: "Mea Culpa", cursive;
  text-decoration: none;

  span: {
    font-family: "MonteCarlo", cursive;
  }
`;

const StyledRoundedButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledSwitcher = styled(motion.div)`
  padding: 15px;
  position: fixed;
  top: 100px;
  right: 20px;
  border-radius: 5px;
  z-index: 1;
  h4 {
    margin-bottom: 10px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.text_700};
  }

  .card-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StyledCard = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin-right: 10px;
  cursor: pointer;
`;
