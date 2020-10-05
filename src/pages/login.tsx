import asyncLogin from "apis/asyncLogin";
import { Header } from "components/organisms/Header";
import { LoginForm } from "containers/LoginForm";
import { EIchange } from "domain/type";
import Router from "next/router";
import React, { FunctionComponent, useState } from "react";
import AuthService from "utils/AuthService";

const auth = new AuthService();

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
  // ボタンのバリデーション相談
  const isButtonDisabled =
    state.mailAddress.match(MAIl_ADDRESS_VALIDATOR) && state.password.match(PASSWORD_VALIDATOR);

  const loginhandleInputChange = (e: EIchange) => {
    setState({
      ...state,
      mailAddress: e.target.value,
      disabled: isButtonDisabled,
    });
  };

  const PasswordhandleInputChange = (e: EIchange) => {
    setState({
      ...state,
      password: e.target.value,
      disabled: isButtonDisabled,
    });
  };

  const onChangePassIcon = () => {
    if (state.isShowPassword) {
      setState({ ...state, isShowPassword: false, typeName: "password" });
    } else {
      setState({ ...state, isShowPassword: true, typeName: "text" });
    }
  };

  const onClickLogin = () => {
    asyncLogin(state.mailAddress, state.password)
      .then((res) => {
        auth.setLoginInformation(res);
        Router.push("/user");
      })
      .catch((e) => {
        alert(e.error);
      });
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
        onClickLogin={onClickLogin}
      ></LoginForm>
    </>
  );
};

export default Login;
