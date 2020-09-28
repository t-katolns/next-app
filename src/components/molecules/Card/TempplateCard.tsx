import { Card } from 'components/atoms/Card';
import { Typography } from 'components/atoms/Typography';
import { Box } from 'components/layouts/Box';
import { Flex } from 'components/layouts/Flex';
import React, { FunctionComponent, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const CardStyled = styled(Card)`
  padding: 16px 20px;

  position: absolute;
  left: -20px;
  right: -16px;
  bottom: -18px;
  box-shadow: 0px -1px 0px #e1e6ed;
  z-index: 30;
  img {
    vertical-align: middle;
    margin-right: 10px;
  }
  .close {
    display: inline;
    color: #0068b4;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.75px;
    margin-left: auto;
  }

  .template {
    height: 195px;
    textarea {
      width: 100%;
      height: 190px;
      font-size: 14px;
    }
  }
  .edit {
    margin-left: auto;
    margin-right: 0;
    button {
      background: #0068b4;
      border-radius: 4px;
      color: white;
      width: 57px;
      height: 24px;
      font-weight: 500;
      font-size: 12px;
      margin-left: auto;
    }
  }
`;

type Props = {
  template: string;
  isClose: () => void;
  isShowPreviewCard: (message: string) => void;
};

export const TemplateCard: FunctionComponent<Props> = ({
  template,
  isClose,
  isShowPreviewCard,
}) => {
  const [redonly, setReadonly] = useState(true);
  const message =
    'はじめまして！\n xxxと申します。\n私は、xxxxxxxxxxxx という経歴で、xxxxxxx という想いから、現在キャリアアドバイザーとして活動しています。\nプロフィールを拝見して、すごくエネルギッシュな方だなと興味を惹かれました。 \nすぐにご提案できるポジションもありますが、まずはキャリアの棚卸しや壁打ちなど、ざっくばらんにお話するのも面白いかなと考えています。 \nよければぜひ一度お会いしてお話ししましょう！';
  return (
    <CardStyled height={341}>
      <Flex>
        <img src="images/template_white.svg" />
        <Typography weight={500}>スカウトテンプレート</Typography>
        <div className="close" onClick={isClose}>
          閉じる
        </div>
      </Flex>
      <Box mb={25} />
      <div className="template">
        <textarea readOnly={redonly}>{message}</textarea>
      </div>
      <Box mb={25} />
      <Flex justifyContent={'flex-end'}>
        <div className="edit">
          <img src="images/edit.svg" onClick={() => setReadonly(false)} />
          <button onClick={() => isShowPreviewCard(message)}>適応</button>
        </div>
      </Flex>
      <Box mb={10} />
      <div className="pagenate circle-ripple" style={{ textAlign: 'center' }}>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakClassName={'break-me'}
          pageCount={5}
          pageRangeDisplayed={5}
          // onPageChange={(data) => onChangePage(data.selected + 1)}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </CardStyled>
  );
};
