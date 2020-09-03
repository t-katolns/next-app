import { Modal } from "components/atoms/Modal";
import { RoundedIcon } from "components/atoms/RoundedIcon";
import { Typography } from "components/atoms/Typography";
import { Flex } from "components/layouts/Flex";
import React, { FunctionComponent } from "react";
import { SelectDate } from "../Select/SelectDate";

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
      <SelectDate />
    </Modal>
  );
};
