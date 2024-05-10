import { CSSProperties } from "react";
import { ModalButtonSize, ModalButtonTheme, ModalButtonWidth, ModalPosition, ModalSize } from "../types/modal";

export const FLEX_DIRECTION = {
  row: "row",
  column: "column",
} as const;

export const DEVICE_WIDTH = {
  desktop: "100%",
  tablet: "768px",
  mobile: "375px",
} as const;

export const JUSTIFY_CONTENT = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  stretch: "stretch",
  between: "space-between",
} as const;

export const MODAL_SIZE: Record<ModalSize, CSSProperties["width"]> = {
  full: "100%",
  large: "600px",
  medium: "480px",
  small: "320px",
};

export const MODAL_POSITION: Record<ModalPosition, CSSProperties["alignItems"]> = {
  top: "flex-start",
  center: "center",
  bottom: "flex-end",
} as const;

export const MODAL_BORDER_RADIUS: Record<ModalPosition, CSSProperties["borderRadius"]> = {
  top: "0px 0px 10px 10px",
  center: "8px",
  bottom: "10px 10px 0px 0px",
};

export const MODAL_BUTTON_SIZE: Record<ModalButtonSize, string> = {
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

export const MODAL_BUTTON_WIDTH: Record<ModalButtonWidth | ModalButtonSize, CSSProperties["width"]> = {
  small: "60px",
  medium: "80px",
  large: "120px",
  xLarge: "160px",
  full: "100%",
  fit: "fit-content",
};

export const MODAL_BUTTON_THEME: Record<ModalButtonTheme, string> = {
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