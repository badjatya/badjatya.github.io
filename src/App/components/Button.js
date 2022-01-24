import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick} className="outer-shadow hover-in-shadow">
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.p`
  font-size: 1rem;
  background: transparent;
  border-radius: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  padding: 10px 25px;

  &:hover:after {
    border-radius: 30px;
  }
`;
