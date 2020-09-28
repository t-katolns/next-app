import { Skeleton } from 'components/atoms/Skeleton';
import { Box } from 'components/layouts/Box';
import { Flex } from 'components/layouts/Flex';
import React, { FunctionComponent } from 'react';

export const SkeletonProfile: FunctionComponent = () => {
  return (
    <>
      <div style={{ padding: 16 }}>
        <Flex>
          <div
            className="header-radius"
            style={{ width: '120px', height: '100px', marginRight: '30px' }}
          >
            <Skeleton radius={50}></Skeleton>
          </div>
          <div
            className="header-square"
            style={{ width: '100%', height: '20px', marginTop: '10px' }}
          >
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </Flex>
        <Box mb={70} />
        <div className="profile-box" style={{ width: '100%', height: '300px' }}>
          <Skeleton />
        </div>
        <Box mb={70} />
        <div style={{ height: '40px', marginBottom: '30px' }}>
          <Skeleton />
        </div>
        <div style={{ height: '40px', marginBottom: '30px' }}>
          <Skeleton />
        </div>
        <div style={{ height: '40px', marginBottom: '30px' }}>
          <Skeleton />
        </div>
        <div style={{ height: '40px', marginBottom: '30px' }}>
          <Skeleton />
        </div>
        <div style={{ height: '40px', marginBottom: '30px' }}>
          <Skeleton />
        </div>
      </div>
    </>
  );
};
