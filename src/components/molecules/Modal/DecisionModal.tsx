import { Modal } from "components/atoms/Modal";
import { RoundedIcon } from "components/atoms/RoundedIcon";
import { Typography } from "components/atoms/Typography";
import { Box } from "components/layouts/Box";
import { Flex } from "components/layouts/Flex";
import { SelectDate } from "components/molecules/Select/SelectDate";
import React, { FunctionComponent } from "react";
type Props = {
  url: string;
  name: string;
};
export const DecisionModal: FunctionComponent<Props> = ({ url, name }) => {
  return (
    <Modal width={480} height={600} radius={12} padding={14}>
      <Flex>
        <RoundedIcon url={url} size={50}></RoundedIcon>
        <div style={{ paddingLeft: `20px` }}>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>{name}</p>
        </div>
        <img
          src="images/close.svg"
          style={{ marginLeft: "auto", paddingBottom: `21px` }}
        />
      </Flex>
      <Typography size={12} weight={500} color={"#525E6D"}>
        生年月日
      </Typography>
      <Box mt={15} />
      <Flex justifyContent={"space-between"}>
        <SelectDate target={"年"} />
        <SelectDate target={"月"} />
        <SelectDate target={"日"} />
      </Flex>
      <div style={{ position: "relative" }}>
        <div>ssssssssssssssssssss</div>
      </div>
    </Modal>
  );
};
