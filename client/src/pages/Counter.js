import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";

const Counter = () => {
  const dispatch = useDispatch();
  // useSelector를 사요ㅛㅇ시 리덕스가 자동으로 subscription 설정
  // dom에서 제거시 리액트 리덕스가 자동으로 subscription 해제
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {};
  const decrementHandler = () => {};
  return (
    <Layout>
      <h1>Redux Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </Layout>
  );
};

export default Counter;
