import React from "react";
import { useRef } from "react";

import styled from "styled-components";
import { Button } from "antd";

const RefPracticeScrollTest = () => {
  const Box = useRef(null);

  const StyleBox = styled.p`
    /* 사각형 박스 만들기 */
    border: 1px solid black;
    height: 300px;
    width: 300px;
    overflow: auto;
    position: relative;
  `;
  const InnserStyle = styled.p`
    /* 안쪽, 높이 650 px 를 주어서, 스크롤 붙이기.  */
    width: 100%;
    height: 650px;
    background: linear-gradient(yellow, red);
  `;
  // box영역을 선택하기 위한 ref설정 1
  // 훅스 useRef 라는 함수를 이용함
  return (
    <div>
      {/* 박스의 스크롤에 ref 속성 달기 */}
      <StyleBox ref={Box}>
        <InnserStyle>
          <h2>박스</h2>
        </InnserStyle>
      </StyleBox>
      <Button
        title="맨밑으로"
        type="primary"
        danger
        onClick={() => (Box.current.scrollTop = 350)}
      >
        맨밑으로
      </Button>
      <Button
        title="맨위로"
        type="primary"
        onClick={() => (Box.current.scrollTop = 0)}
      >
        맨위로
      </Button>
    </div>
  );
};

export default RefPracticeScrollTest;
