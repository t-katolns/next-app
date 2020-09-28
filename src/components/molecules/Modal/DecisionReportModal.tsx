import { Modal } from 'components/atoms/Modal';
import { RoundedIcon } from 'components/atoms/RoundedIcon';
import { Typography } from 'components/atoms/Typography';
import { Box } from 'components/layouts/Box';
import { Flex } from 'components/layouts/Flex';
import { SelectScheduledDate } from 'components/molecules/Select/SelectScheduledDate';
import { SubmitButton } from 'components/molecules/Submit/SubmitButton';
import { DecisionTextArea } from 'components/molecules/TextField/DecisionTextArea';
import { DecisionTextField } from 'components/molecules/TextField/DecisionTextField';
import { EAchange, EIchange } from 'domain/type';
import React, { FunctionComponent } from 'react';

type Props = {
  url: string;
  name: string;
  joinCompanyName: string;
  yearly: string;
  comment: string;
  handleInputDicision: (e: EIchange | EAchange, key: string) => void;
  isDecisionModal: () => void;
};
export const DecisoonReportModal: FunctionComponent<Props> = ({
  url,
  name,
  joinCompanyName,
  yearly,
  comment,
  handleInputDicision,
  isDecisionModal,
}) => {
  return (
    <Modal width={470} height={600} radius={12} padding={14}>
      <Flex>
        <RoundedIcon url={url} size={50}></RoundedIcon>
        <div style={{ paddingLeft: `20px` }}>
          <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{name}</p>
          <p>採用決定報告</p>
        </div>
        <img
          src="images/close.svg"
          style={{ marginLeft: 'auto', paddingBottom: `21px` }}
          onClick={isDecisionModal}
        />
      </Flex>
      <Box mb={50} />
      <Typography size={12} weight={500} color={'#525E6D'}>
        入社予定日
      </Typography>
      <Box mb={15} />
      <Flex justifyContent={'space-between'}>
        <SelectScheduledDate target={'年'} />
        <SelectScheduledDate target={'月'} />
        <SelectScheduledDate target={'日'} />
      </Flex>
      <div style={{ position: 'relative' }}>
        <Box mb={20} />
        <DecisionTextField
          height={40}
          placeholder={'入社する企業名'}
          value={joinCompanyName}
          stateName={'joinCompanyName'}
          handleInputCahnge={handleInputDicision}
        ></DecisionTextField>
        <Box mb={28} />
        <DecisionTextField
          height={40}
          placeholder={'想定年収'}
          value={yearly}
          stateName={'yearly'}
          handleInputCahnge={handleInputDicision}
        ></DecisionTextField>
        <Box mb={28} />
        <DecisionTextArea
          height={80}
          placeholder={'補足コメント (任意)'}
          stateName={'comment'}
          handleInputChange={handleInputDicision}
          value={comment}
        ></DecisionTextArea>
        <Box mb={28} />
        <div style={{ height: '54px' }}></div>
        <div style={{ textAlign: 'right' }}>
          <SubmitButton
            text={'報告せず一時保存'}
            background={'#E1E6ED'}
          ></SubmitButton>
          <SubmitButton
            marginl={16}
            text={'この内容で報告'}
            background={'#0068B4'}
            color={'#FFFFFF'}
          ></SubmitButton>
        </div>
      </div>
    </Modal>
  );
};
