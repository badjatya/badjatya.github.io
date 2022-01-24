// Importing Packages
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav className="outer-shadow">
      <StyledLink to="/" className="outer-shadow hover-in-shadow">
        Home
      </StyledLink>
      <StyledLink to="/about" className="outer-shadow hover-in-shadow">
        About
      </StyledLink>
      <StyledLink to="/services" className="outer-shadow hover-in-shadow">
        Services
      </StyledLink>
      <StyledLink to="/projects" className="outer-shadow hover-in-shadow">
        Projects
      </StyledLink>
      <StyledLink to="/contact" className="outer-shadow hover-in-shadow">
        Contact
      </StyledLink>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.aside`
  padding: 15px;
  position: fixed;
  top: 100px;
  right: 20px;
  border-radius: 5px;
  width: 200px;
  height: 80vh;

  h1 {
    margin-bottom: 20px;
  }

  .btn {
    margin-bottom: 20px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  background: transparent;
  border-radius: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 10px 25px;
  text-decoration: none;
  text-align: center;
  display: block;
  margin-bottom: 20px;

  &:hover:after {
    border-radius: 30px;
  }
`;
