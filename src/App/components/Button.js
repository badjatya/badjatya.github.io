import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <StyledButton
      {...props}
      onClick={props.onClick}
      className="outer-shadow hover-in-shadow"
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.span`
  font-size: 1rem;
  background: transparent;
  border-radius: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 10px 25px;
  text-decoration: none;

  &:hover:after {
    border-radius: 30px;
  }
`;
