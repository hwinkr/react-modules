import React from "react";
import styled from "styled-components";
import { ModalButtonSize, ModalButtonTheme, ModalButtonWidth } from "../types/modal";

type ButtonWidthProps = ModalButtonWidth | "fixed";

export interface ButtonProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>> {
  theme?: ModalButtonTheme;
  size?: ModalButtonSize;
  width?: ButtonWidthProps;
}

const BUTTON_SIZE_STYLES: Record<ModalButtonSize, string> = {
  small: `
    height: 24px;
    line-height: 16px;
    font-size: 12px;
  `,
  medium: `
    height: 36px;
    line-height: 18px;
    font-size: 14px;
  `,
  large: `
    height: 44px;
    line-height: 22px;
    font-size: 18px;
  `,
  xLarge: `
    height: 56px;
    line-height: 28px;
    font-size: 24px;
  `,
};

const BUTTON_WIDTH_STYLES: Record<ModalButtonWidth | ModalButtonSize, string> = {
  small: "60px",
  medium: "80px",
  large: "120px",
  xLarge: "160px",
  full: "100%",
  fit: "fit-content",
};

const BUTTON_THEME_STYLES: Record<ModalButtonTheme, string> = {
  dark: `
    background-color: #333333; 

    color: #ffffff;

    &:hover {
      background-color: #1f1f1f; 
    }
    `,

  white: `
    background-color: #ffffff; 

    color: #8B95A1;

    &:hover {
      border: 0.5px solid #dfdfdf;
      background-color: #f0f0f0; 
    }
    `,
};

const ModalButton = ({ children, onClick, theme = "white", size = "medium", width = "full", ...props }: ButtonProps) => {
  return (
    <StyledButton $theme={theme} $size={size} $width={width} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default ModalButton;

const StyledButton = styled.button<{ $theme: ModalButtonTheme; $size: ModalButtonSize; $width: ButtonWidthProps }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.5px solid #8b95a1;
  border-radius: 8px;

  font-weight: 700;

  ${({ $size }) => BUTTON_SIZE_STYLES[$size]};
  ${({ $theme }) => BUTTON_THEME_STYLES[$theme]};
  width: ${({ $width, $size }) => ($width === "fixed" ? BUTTON_WIDTH_STYLES[$size] : BUTTON_WIDTH_STYLES[$width])};
`;
