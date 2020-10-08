import { FunctionComponent } from 'react';

type Props = {
  name: string;
  department: string;
  endYear: number;
};

export const Education: FunctionComponent<Props> = ({
  name,
  department,
  endYear,
}) => {
  return (
    <>
      <p style={{ fontWeight: 600 }}>{name}</p>
      <p>{department}</p>
      <p>{endYear}</p>
    </>
  );
};
