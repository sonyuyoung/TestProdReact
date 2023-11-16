//rsc
import React from "react";
import PropTypes from "prop-types";

// 자식 컴포넌트
// 부모 컴포넌트로 부터 전달받는 props 라는 속성을 이용하는 입장.
// 부모: App.js
// const MyComp = (props) => {
const MyComp = ({ name, password, children }) => {
  // 한방에 꺼내오겠음 (비구조화 할당문법)

  return (
    <div>
      <h1>테스트 props 객체 안에 속성들중에 Name만 받아오기,{name}</h1>
      <h1>테스트 props 객체 안에 속성들중에 password 받아오기,{password}</h1>
      <h2>테스트 props 객체 안에 속성들중에 child 받아오기 ,{children}</h2>
    </div>
  );
};
// props 기본값 정하기
MyComp.defaultProps = {
  //   name: "기본이름",
  password: "기본 1234",
};
// props 타입 확인
// arry , arrayOf
MyComp.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string,
};
export default MyComp;
