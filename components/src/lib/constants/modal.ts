import { CSSProperties } from "react";
import { ModalPosition } from "../types/modal";

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

export const MODAL_POSITION: Record<ModalPosition, CSSProperties["alignItems"]> = {
  top: "flex-start",
  center: "center",
  bottom: "flex-end",
} as const;

export const MODAL_BORDER: Record<ModalPosition, CSSProperties["borderRadius"]> = {
  top: "0px 0px 10px 10px",
  center: "8px",
  bottom: "10px 10px 0px 0px",
};
