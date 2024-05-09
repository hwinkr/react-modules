import React from "react";
import styled from "styled-components";

import { FLEX_DIRECTION, JUSTIFY_CONTENT } from "../constants/modal";

import { ElementDirection, ElementJustify } from "../types/modal";

export interface ModalFooterProps {
  direction?: ElementDirection;
  justify?: ElementJustify;
  children: React.ReactNode;
}

const ModalFooter = ({ direction = "row", justify = "between", children }: ModalFooterProps) => {
  return (
    <StyledFooter $direction={direction} $justify={justify}>
      {children}
    </StyledFooter>
  );
};

export default ModalFooter;

const StyledFooter = styled.div<{ $direction: ElementDirection; $justify: ElementJustify }>`
  width: 100%;

  display: flex;
  gap: 12px;
  flex-direction: ${({ $direction }) => FLEX_DIRECTION[$direction]};
  justify-content: ${({ $justify }) => JUSTIFY_CONTENT[$justify]};
`;
