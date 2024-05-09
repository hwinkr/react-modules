import styled from "styled-components";
import { ModalPosition, ModalSize } from "../types/modal";

export interface ModalContentProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  position?: ModalPosition;
  size?: ModalSize;
}

const ModalContent = ({ children, position = "center", size = "medium" }: ModalContentProps) => {
  return (
    <StyledContent $position={position} $size={size}>
      {children}
    </StyledContent>
  );
};

export default ModalContent;

const MODAL_POSITION_STYLES: Record<ModalPosition, string> = {
  top: `    
    border-radius: 0px 0px 10px 10px;
    `,
  center: `
    border-radius: 8px;
    `,
  bottom: `
    border-radius: 10px 10px 0px 0px;
    `,
};

const MODAL_SIZE_STYLES: Record<ModalSize, string> = {
  full: `
    
  `,
  large: `
    max-width: 600px;
  `,
  medium: `
    max-width: 480px;
  `,
  small: `
    max-width: 320px;
  `,
};

const StyledContent = styled.div<{ $position: ModalPosition; $size: ModalSize }>`
  width: 100%;

  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-sizing: border-box;

  background-color: #ffffff;
  ${({ $position }) => MODAL_POSITION_STYLES[$position]};
  ${({ $size }) => MODAL_SIZE_STYLES[$size]};

  z-index: 1;
`;
