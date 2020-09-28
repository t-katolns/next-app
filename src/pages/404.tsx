import { Typography } from "components/atoms/Typography";
import { Box } from "components/layouts/Box";
import React, { FunctionComponent } from "react";

const Error: FunctionComponent = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Box mb={70} />
        <Typography weight={500} size={28}>
          お探しのページは存在しません
        </Typography>
        <Box mb={10} />
      </div>
    </>
  );
};

export default Error;
