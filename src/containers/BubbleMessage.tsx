import { RoundedIcon } from "components/atoms/RoundedIcon";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
type TMessage = {
  user: number;
};
const FirstMessage = styled.div`
  padding: 16px;
  background: #eff6fc;
  border-radius: 8px;
  margin-bottom: 40px;
`;
// const Message = styled.div<TMessage>`
//   display: flex;
//   justify-content: ${({ user }: TMessage) => (user === 1 ? 'flex-end' : 'flex-start')};
//   padding-bottom: 16px;
//   .right {
//     margin-right: 8px;
//     border: 2px solid #e5e6ea;
//     background: ${({ user }: TMessage) => (user ? '#0068B4' : '#F0F2F5')};
//     text-align: center;
//     font-size: 15px;
//     padding: 12px;
//     border-radius: 20px 20px 0px 20px;
//   }
//   .left {
//     background: ${({ user }: TMessage) => (user ? '#F0F2F5' : '#0068B4')};
//     color: ${({ user }: TMessage) => (user ? '#FFFFFF' : '#000000')};
//     padding: 12px;
//     border-radius: 20px 20px 20px 0px;
//   }
// `;
type Props = {
  // firstMessage: ISentScoutMessage;
};
export const BubbleMessage: FunctionComponent<Props> = ({}) => {
  return (
    <>
      <div style={{ overflow: "auto", padding: "24px" }}>
        <FirstMessage>
          <img className="mb-15" src="images/only_visible_to_you.svg" />
          <div className="flex gridgap-10">
            <RoundedIcon size={50} />
            <span>
              <p className="fs-12 fw-500">あなたが送ったメッセージ</p>
              <p className="fs-12 color-tertiary"></p>
            </span>
          </div>
          <p className="fs-14 height- 160"></p>
        </FirstMessage>
        <div className="center">
          <p className="label gray mb-20">2020/07/30</p>
          <p className="fs-12">
            あああさんとマッチングしました。
            <br />
            早速メッセージを使ってみましょう！
          </p>
        </div>
        {/* {te.map((t, i) => (
        <Message key={i} user={t.user[0].id}>
          {t.user[0].id === 1 && <div className="right">{t.user[0].body}</div>}
          {t.user[0].id === 2 && <div className="left">{t.user[0].body}</div>}
        </Message>
      ))} */}
      </div>
      <div className="shadow-white" style={{ height: "72px" }}>
        <textarea></textarea>
      </div>
    </>
  );
};
