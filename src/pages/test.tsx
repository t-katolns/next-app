import { asyncTemplates } from "apis/asyncTemplates";
import { useMessageTemplates } from "apis/hooks/useMessageTemplates";
import { Card } from "components/atoms/Card";
import { Box } from "components/layouts/Box";
import { Flex } from "components/layouts/Flex";
import { ITemplate } from "domain/message_templates";
import React, { FunctionComponent, useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
const CardStyled = styled(Card)`
  box-shadow: 0px -1px 0px #e1e6ed;
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
    width: 400px;
    textarea {
      width: 300px;
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
const Test: FunctionComponent = () => {
  const [redonly, setReadonly] = useState(true);
  const [templateMessage, setTemplateMessage] = useState<ITemplate>();

  // テンプレートを取得
  const { templates, templateLoading } = useMessageTemplates();
  if (templateLoading) {
    <div>loding...</div>;
  }
  // textareaの値を変更した時の処理
  const handleInpurChange = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    message: ITemplate
  ) => {};
  // テンプレートを編集して登録した時の処理
  const onClickAddTemplateMessage = () => {
    asyncTemplates(templateMessage.id, templateMessage.body)
      .then((res) => {
        // templateMessageに保存する？？
      })
      .catch((e) => {
        alert(e.error);
      });
  };
  return (
    <CardStyled height={340} width={500}>
      <div className="template">
        <textarea readOnly={redonly} onChange={}>
          {}
        </textarea>
      </div>
      <Flex justifyContent={"flex-end"}>
        <div className="edit">
          <img src="images/edit.svg" onClick={() => setReadonly(false)} />
          <button onClick={() => onClickAddTemplateMessage()}>保存</button>
        </div>
      </Flex>
      <Box mb={10} />
      <div className="pagenate circle-ripple" style={{ textAlign: "center" }}>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakClassName={"break-me"}
          pageCount={5}
          pageRangeDisplayed={5}
          // onPageChange={(data) => onChangePage(data.selected + 1)}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </CardStyled>
  );
};
export default Test;
