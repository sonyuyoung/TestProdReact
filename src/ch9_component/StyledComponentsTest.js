//rsc
//tnstj 1 import 모듈 가져오기
import React from "react";
import styled, { css } from "styled-components";
import { Button } from "antd";

import { ImPacman, ImCamera } from "react-icons/im";
const StyledComponentsTest = () => {
  // 순서 2 적용하기
  const Box = styled.div`
    /* props 가 있다면 해당 컬러를 사용하고, 없다면, or 조건으로 blue 선택됨. */
    background: ${(props) => props.color || "blue"};
    padding: 1rem;
    display: flex;
  `;

  const Button = styled.button`
    // 원래는 백틱안에서 문자열로 인식을해서 하이라이트가 ( 색깔구분 )
    // 저번에 다운받았던 스타일 확장팩때문에 됨 vscodestyledcomponent
    background: white;
    color: #999;
    border-radius: 4px;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
    display: flex;
    box-sizing: boarder-box;
    font-size: 1rem;
    font-weight: bold;

    // props를 이용할수 있음. 전달된 props 내용을 이용해서 조건부도 가능.
    ${(props) =>
      props.test &&
      css`
        background: none;
        border: 2px solid white;
        color: white;
        &:hover {
          background: white;
          color: black;
        }
      `}

    & + button {
      margin-left: 2rem;
    }
  `; //
  //& 현재 요소  const Box = styled.button` 박스라는 상수에 button 요소
  return (
    <div>
      <h1>
        ImPacman
        <ImPacman />
        <ImCamera />
      </h1>
      {/* Box라는 사용자 정의 커포넌트에 props 전달해보기 */}
      <Box color="red">
        <Button test={true}>hello</Button>
      </Box>
      <Box color="orange">
        <Button test={true}>hello</Button>
      </Box>
      <Box color="yellow">
        <Button test={true}>hello</Button>
      </Box>
      <Box color="green">
        <Button test={true}>hello</Button>
      </Box>
      <Box color="blue">
        <Button test={true}>hello</Button>
      </Box>
      <Box color="navy">
        <Button test={true}>hello</Button>
      </Box>
      <Box color="purple">
        <Button test={true}>hello</Button>
      </Box>
      <su>
        <Box color="gray">
          <h5>바보!!</h5>
        </Box>
      </su>
    </div>
  );
};

export default StyledComponentsTest;
