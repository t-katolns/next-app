import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Name = styled.p`
  display: inline-block;
  font-weight: 600px;
`;

const Level = styled.p`
  margin-left: 5px;
  font-size: 10px;
  display: inline-block;
  color: #525e6d;
`;

type Props = {
  name: string;
  level: string;
};

export const Language: FunctionComponent<Props> = ({ name, level }) => {
  return (
    <>
      <Name>{name}</Name>
      <Level>({level})</Level>
    </>
  );
};
