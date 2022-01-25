import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const Login = () => {
  // const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHanlder = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    // 해주는 이유는 새로고침방지. (form 제출 누르면 refresh 되어버리면, 원래해야될 일들을 제대로 적어놓지못하고 페이지가리프레쉬되어버림)
    // 이를 막기 위해서 event.preventDefault()를 수행.
    event.preventDefault();

    console.log(`Email ${email}`);
    console.log(`Password ${password}`);

    let body = {
      email: email,
      password: password,
    };

    // useDispatch()를 사용한 dispatch로 loginUser action 수행.
    // dispatch(loginUser(body)).then((response) => {
    //   if (response.payload.loginSuccess) {
    //     // login 성공시 페이지를 root 페이지로 이동.
    //     navigate("/");
    //   } else {
    //     alert("Error");
    //   }
    // });
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmitHandler}>
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={onEmailHandler}
        />
        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={onPasswordHanlder}
        />
        <br />
        <LoginButton>로그인</LoginButton>
        <SignUpBox>
          아이디가 없다면 &nbsp;<u>회원가입하기</u>
        </SignUpBox>
      </Form>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  position: absolute;
  width: 375px;
  height: 300px;
  /* background: gray; */
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-top: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  width: 340px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid gray;
  font-size: 16px;
`;

const Label = styled.label`
  margin-top: 10px;
  height: 10px;
`;

const SignUpBox = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  width: 340px;
  height: 10px;
  font-size: 12px;
  color: gray;
`;

const LoginButton = styled.button`
  width: 340px;
  height: 45px;
  border: 0;
  font-size: 16px;
  color: #fff;
  background-color: rgb(165, 0, 0);
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #c33e63;
  }
`;
