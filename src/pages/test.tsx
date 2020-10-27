import { useMessageTemplates } from "apis/hooks/useMessageTemplates";
import { Card } from "components/atoms/Card";
import { Box } from "components/layouts/Box";
import { Flex } from "components/layouts/Flex";
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
  const [currentId, setCurrentId] = useState(0);
  const { templates, templateLoading } = useMessageTemplates();
  if (templateLoading) {
    <div>loding...</div>;
  }

  const template = templates.templates[currentId];
  const body = template.body;

  const onChangePage = (data: any) => {
    setCurrentId(data.selected);
  };
  return (
    <CardStyled height={340} width={500}>
      <div className="template">
        <textarea readOnly={redonly}>{body}</textarea>
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
          onPageChange={(data) => onChangePage(data)}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </CardStyled>
  );
};
export default Test;
