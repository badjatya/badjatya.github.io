import React from "react";
import styled from "styled-components";

const RoundedButton = ({ children, onClick }) => {
  return (
    <StyledRoundedButton
      onClick={onClick}
      className="outer-shadow hover-in-shadow"
    >
      {children}
    </StyledRoundedButton>
  );
};

export default RoundedButton;

const StyledRoundedButton = styled.p`
  font-size: 1.2rem;
  background: transparent;
  border-radius: 50%;
  font-weight: 500;
  color: ${({ theme }) => theme.color.text_900};
  cursor: pointer;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover:after {
    border-radius: 50%;
  }
`;
