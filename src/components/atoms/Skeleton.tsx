import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
type TSkeleton = {
  radius: number;
};
const SkeletonPulse = styled.div<TSkeleton>`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  border-radius: ${({ radius }: TSkeleton) => radius || 0}px;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

type Props = {
  radius?: number;
};

export const Skeleton: FunctionComponent<Props> = ({ radius }) => {
  return <SkeletonPulse radius={radius}></SkeletonPulse>;
};
