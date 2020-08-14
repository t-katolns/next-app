import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Div = styled.div<{ width: number; height: number }>`
  padding: 16px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(109, 123, 143, 0.12),
    0px 4px 24px rgba(109, 123, 143, 0.25);
  border-radius: 4px;
`;

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export const Card: FunctionComponent<Props> = ({
  width,
  height,
  children,
  className,
}) => {
  return (
    <Div className={className} width={width} height={height}>
      {children}
    </Div>
  );
};
