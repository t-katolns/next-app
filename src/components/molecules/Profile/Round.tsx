import { FunctionComponent } from 'react';
import styled from 'styled-components';
const P = styled.p`
  margin-right: 8px;
  padding: 3px 12px;
  background: #f6f7f9;
  border-radius: 30px;
  display: inline-block;
`;
type Props = { className?: string };

export const Round: FunctionComponent<Props> = ({ children, className }) => {
  return <P className={className}>{children}</P>;
};
