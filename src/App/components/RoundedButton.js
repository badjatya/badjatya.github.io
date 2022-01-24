import React from "react";
import styled from "styled-components";

const RoundedButton = (props) => {
  return (
    <StyledRoundedButton
      {...props}
      onClick={props.onClick}
      className="outer-shadow hover-in-shadow"
    >
      {props.children}
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
  margin: 10px;

  &:hover {
    color: ${(props) =>
      props.hover ? props.theme.primary : props.theme.color.text_900};
  }

  &:hover:after {
    border-radius: 50%;
  }
`;
