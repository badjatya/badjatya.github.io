// Importing Packages
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import RoundedButton from "../components/RoundedButton";

// Icons
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo>
        B<span>adjatya</span>
      </StyledLogo>
      <RoundedButton>
        <FaBars />
      </RoundedButton>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  margin-top: 10px;
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
  color: ${({ theme }) => theme.color.primary};
  font-family: "Mea Culpa", cursive;

  span: {
    font-family: "MonteCarlo", cursive;
  }
`;
