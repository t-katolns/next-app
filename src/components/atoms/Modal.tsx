import { Portal } from "components/atoms/Portal";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const ModalStyle = styled.div<{
  padding: number;
  width: number;
  height: number;
  radius: number;
}>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  padding: ${(props) => props.padding}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.radius}px;
`;

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(109, 123, 143, 0.7)",
  zIndex: 1000,
};

type Props = {
  padding: number;
  width: number;
  height: number;
  radius?: number;
};

export const Modal: FunctionComponent<Props> = ({
  padding,
  width,
  height,
  radius,
  children,
}) => {
  if (!process.browser) return null;
  return (
    <Portal>
      <div style={OVERLAY_STYLES} />
      <ModalStyle
        padding={padding}
        width={width}
        height={height}
        radius={radius}
      >
        {children}
      </ModalStyle>
    </Portal>
  );
};
