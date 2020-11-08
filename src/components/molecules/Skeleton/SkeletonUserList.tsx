import { Skeleton } from "components/atoms/Skeleton";
import { Box } from "components/layouts/Box";
import { Flex } from "components/layouts/Flex";
import React, { FunctionComponent } from "react";

export const SkeletonUserList: FunctionComponent = () => {
  const items = [];
  for (let i = 0; i < 7; i++) {
    items.push(
      <>
        <Flex>
          <div className="radius" style={{ width: "110px", height: "80px", marginRight: "30px" }}>
            <Skeleton radius={50}></Skeleton>
          </div>
          <div className="square" style={{ width: "100%", height: "20px" }}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </Flex>
        <Box mb={40} />
      </>
    );
  }
  return (
    <>
      <div style={{ padding: 16 }}>
        <div className="square-box" style={{ width: "100%", height: "35px", marginBottom: "35px" }}>
          <Skeleton />
        </div>
        {items}
      </div>
    </>
  );
};
