import { Typography } from "components/atoms/Typography";
import { Header } from "components/organisms/Header";
import { LoginForm } from "containers/LoginForm";
import { Echange } from "domain/type";
import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

const TypographyStyled = styled(Typography)`
  text-align: center;
`;

interface IState {
  mailAddress: string;
  password: string;
  typeName: string;
  isShowPassword: boolean;
  disabled: boolean;
}

const Login: FunctionComponent = () => {
  const [state, setState] = useState<IState>({
    mailAddress: "",
    password: "",
    typeName: "password",
    isShowPassword: false,
    disabled: false,
  });
  const MAIl_ADDRESS_VALIDATOR = /^[\w+\-.]+@[a-z\d\-.]+\.[a-z]+$/i;
  const PASSWORD_VALIDATOR = /^[a-zA-Z0-9!-/:-@¥[-`{-~]{6,100}$/i;
  // ボタンのバリデーション
  const isButtonDisabled =
    state.mailAddress.match(MAIl_ADDRESS_VALIDATOR) &&
    state.password.match(PASSWORD_VALIDATOR);

  const loginhandleInputChange = (e: Echange) => {
    if (isButtonDisabled) {
      setState({ ...state, mailAddress: e.target.value, disabled: true });
    } else {
      setState({ ...state, mailAddress: e.target.value, disabled: false });
    }
  };

  const PasswordhandleInputChange = (e: Echange) => {
    if (isButtonDisabled) {
      setState({ ...state, password: e.target.value, disabled: false });
    } else {
      setState({ ...state, password: e.target.value, disabled: true });
    }
  };

  const onChangePassIcon = () => {
    if (state.isShowPassword) {
      setState({ ...state, isShowPassword: false, typeName: "password" });
    } else {
      setState({ ...state, isShowPassword: true, typeName: "text" });
    }
  };

  return (
    <>
      <Header></Header>
      <LoginForm
        loginHandleInputChange={loginhandleInputChange}
        passwordHandleInputChange={PasswordhandleInputChange}
        onChangePassIcon={onChangePassIcon}
        isShowPassword={state.isShowPassword}
        typeName={state.typeName}
        disabled={state.disabled}
      ></LoginForm>
      <TypographyStyled weight={500} size={14}>
        t-katlon
      </TypographyStyled>
    </>
  );
};

export default Login;
