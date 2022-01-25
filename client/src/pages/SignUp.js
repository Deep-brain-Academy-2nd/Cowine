import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [result, setResult] = useState("");
  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    let changeData = JSON.stringify(data);

    setResult(changeData);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LabelTab>유저 아이디</LabelTab>
        <Input
          type="text"
          {...register("userId", { required: true })}
          placeholder="유저 ID"
        />
        {errors.userId && errors.userId.type === "required" && (
          <p>아이디를 적어주세요.</p>
        )}
        {errors.password_check &&
          errors.password_check.type === "minLength" && (
            <p>아이디를 4자 이상 적어주세요.</p>
          )}
        <LabelTab>비밀번호</LabelTab>
        <Input
          type="password"
          {...register("password", { required: true, minLength: 8 })}
          placeholder="password"
        />
        <LabelTab>비밀번호 확인</LabelTab>
        <Input
          type="password"
          {...register("password_check", {
            required: "비밀번호를 확인 해주세요.",
            validate: (value) => value === password.current,
          })}
          placeholder="비밀번호 확인"
        />
        {errors.password_check && errors.password_check.type === "required" && (
          <p>비밀번호를 적어주세요.</p>
        )}
        {errors.password_check &&
          errors.password_check.type === "minLength" && (
            <p>비밀번호를 8자 이상 적어주세요.</p>
          )}
        {errors.password_check && errors.password_check.type === "validate" && (
          <p>비밀번호가 일치하지 않습니다.</p>
        )}
        <LabelTab>이름</LabelTab>
        <Input
          type="text"
          {...register("userName", { required: true })}
          placeholder="이름"
        />
        <LabelTab>나이</LabelTab>
        <Input
          type="age"
          {...register("userAge", { required: true, min: 19 })}
          placeholder="나이"
        />
        {errors.userAge && errors.userAge.type === "required" && (
          <p>나이를 입력해주세요.</p>
        )}
        {errors.userAge && errors.userAge.type === "min" && (
          <p>19세 이상부터 가입가능합니다.</p>
        )}
        <LabelTab>성별</LabelTab>
        <Select
          type="text"
          {...register("gender", { required: true })}
          placeholder="성별"
        >
          <option value="1">남자</option>
          <option value="2">여자</option>
        </Select>
        <p>{result}</p>
        <LoginButton type="submit">회원가입</LoginButton>
      </Form>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  position: absolute;
  top: 120px;
  width: 400px;
  height: 600px;
  /* background: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LabelTab = styled.label`
  width: 340px;
  margin: 10px 0 3px;
  display: flex;
  justify-content: flex-start;
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

const Select = styled.select`
  margin-top: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  width: 340px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid gray;
  font-size: 16px;
`;

const LoginButton = styled.button`
  width: 340px;
  height: 45px;
  border: 0;
  margin-top: 15px;
  font-size: 16px;
  color: #fff;
  background-color: rgb(165, 0, 0);
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #c33e63;
  }
`;
