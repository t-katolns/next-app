import { Card } from "components/atoms/Card";
import { Typography } from "components/atoms/Typography";
import { Flex } from "components/layouts/Flex";
import { Echange } from "domain/type";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const CardStyled = styled(Card)`
  margin-top: 40px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const TextField = styled.div`
  width: 80%;
  height: 48px;
  border-radius: 4px;
  border-bottom: 2px solid #6d7b8f;
  background: #f6f7f9;
  input {
    padding: 16px 15px;
    width: 90%;
    border: none;
    outline: none;
    background: transparent;
    color: #000000;
  }
`;

const PasswordTextField = styled.div<{ isShowPassword: boolean }>`
  width: 80%;
  height: 48px;
  border-bottom: 2px solid #6d7b8f;
  background: #f6f7f9;
  border-radius: 4px;
  display: flex;
  flex-direction: row-reverse;
  input {
    padding-left: 15px;
    padding-right: 15px;
    width: 90%;
    border: none;
    outline: none;
    background: transparent;
    color: #000000;
  }
  .eye {
    position: relative;
    top: 16px;
    right: 10px;
    display: ${(props) => (props.isShowPassword ? "block" : "none")};
  }
  .eye_slash {
    position: relative;
    top: 16px;
    right: 10px;
    display: ${(props) => (props.isShowPassword ? "none" : "block")};
  }
`;

const Button = styled.div<{ disabled: boolean }>`
  width: 328px;
  height: 48px;
  background: #c7ced7;
  border-radius: 8px;
  color: #ffffff;
  background: ${(props) => (props.disabled ? "#0068B4" : "#C7CED7")};
  text-align: center;
  line-height: 48px;
`;

type Props = {
  loginHandleInputChange: (e: Echange) => void;
  passwordHandleInputChange: (e: Echange) => void;
  onChangePassIcon: () => void;
  typeName: string;
  isShowPassword: boolean;
  disabled: boolean;
};

export const LoginForm: FunctionComponent<Props> = ({
  loginHandleInputChange,
  passwordHandleInputChange,
  onChangePassIcon,
  isShowPassword,
  typeName,
  disabled,
}) => {
  return (
    <Flex justifyContent={"center"}>
      <CardStyled width={400} height={300}>
        <Typography color={"#6D7B8F"} weight={500}>
          ログイン情報を入力
        </Typography>
        <TextField>
          <input
            placeholder={"メールアドレス"}
            onChange={loginHandleInputChange}
          />
        </TextField>
        <PasswordTextField isShowPassword={isShowPassword}>
          <span onClick={onChangePassIcon}>
            <img src="images/eye.svg" className="eye" />
            <img src="images/eye_slash.svg" className="eye_slash" />
          </span>
          <input
            placeholder="password"
            type={typeName}
            onChange={passwordHandleInputChange}
          />
        </PasswordTextField>
        <Button disabled={disabled}> ログイン</Button>
      </CardStyled>
    </Flex>
  );
};
