import { Typography } from 'components/atoms/Typography';
import { Box } from 'components/layouts/Box';
import { Flex } from 'components/layouts/Flex';
import React, { FunctionComponent } from 'react';

export const Sort: FunctionComponent = () => {
  return (
    <Flex justifyContent={'space-around'}>
      <Typography> 並び替え</Typography>
      <Box pl={10} />
      <Typography>高評価</Typography>
    </Flex>
  );
};
