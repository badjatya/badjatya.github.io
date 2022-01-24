// Importing Packages
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { setNavActive } from "../redux/actions/style.action";

// Components
import RoundedButton from "../components/RoundedButton";

// Data
import { navSocialData } from "../data/nav.data";

const Nav = () => {
  // State and dispatch
  const navData = useSelector((state) => state.styles.nav);
  const dispatch = useDispatch();
  return (
    <StyledNav className="outer-shadow">
      <div className="nav">
        {navData &&
          navData.map((nav) => (
            <StyledLink
              key={nav.id}
              to={nav.to}
              onClick={() => dispatch(setNavActive(nav.id))}
              active={nav.active}
              className="outer-shadow hover-in-shadow"
            >
              {nav.title}
            </StyledLink>
          ))}
      </div>

      <div className="navSocialIcons">
        {navSocialData &&
          navSocialData.map((nav) => (
            <RoundedButton hover={true} key={nav.id}>
              {nav.icon}
            </RoundedButton>
          ))}
      </div>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.aside`
  padding: 15px;
  padding-top: 25px;
  position: fixed;
  top: 100px;
  right: 20px;
  border-radius: 5px;
  width: 200px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin-bottom: 20px;
  }

  .btn {
    margin-bottom: 20px;
  }

  .nav {
    width: 100%;
  }

  .navSocialIcons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  background: transparent;
  border-radius: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  color: ${(props) =>
    props.active ? props.theme.primary : props.theme.color.text_700};
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
