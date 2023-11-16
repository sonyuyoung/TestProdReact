//훅스 useState 먼저 확인.
// 복습 해보기.
// 지금부터는 모두 함수형 컴포넌트로 작업하기.
// import { Button } from "bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "antd";

const InfoTestUseEffect = () => {
  // state 상태, useState('초깃값') -> 결과는 2개를 반환
  // 1 name : state 상태값
  // 2 setName : 세터 함수를 반환. -> 업데이트를 하는 함수.
  // setName -> name 의 값을 업데이트 해줌.
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // useEffect test
  // useEffect(콜백함수,뎁스(의존성배열))
  // 의존성 배열모양 1)아무것도 없을때 , 매번 콜백함수실행되고,
  // 2) [],빈배열 , 한번만 실행
  // 3) [list ], list 상태가 변경될떄마다 콜백함수 싪행됨
  useEffect(() => {
    console.log("useEffect 호출이됨 ");
    console.log({
      name,
      nickname,
    });
    // 후처리함수 추가할것임 콜백함수내부에 -> return ()=>{ 수행할로직 }
    //
    return () => {
      console.log("후처리 함수 호출이됨 ");
      console.log(name);
    };
  }, []); //현재 두번째 매개변수에 모양이 아무것도 없다 . 매번 실행 확인하기

  //추가: 버튼추가해서 visible 속성 확인하기
  const [visible, setVisible] = useState(false);

  // 이벤트 핸들러 추가
  // 1. 이름 캐멀케이스 표기법, 2. 인자로는 함수 형태로 전달.
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  //결과 출력하기. 작성 문법은 JSX -> 기존 HTML 형식과 동일.
  // 리액트 컴포넌트는 대문자 시작,
  // 기존 DOM , 소문자 태그.
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {" "}
        {visible ? "hide" : "show"}
      </Button>
      <div>
        <div style={!visible ? {} : { display: "none" }}>
          {/* 입력창인데, 값을 입력시, onChange 이벤트 핸들러 동작해서, 결과 뷰에 반영 */}
          <input value={name} onChange={onChangeName} />
          <input value={nickname} onChange={onChangeNickName} />
        </div>
        {/* 결과 뷰 출력 */}
        <div>
          <h1>
            이름: <b>{name}</b>
          </h1>
        </div>
        <div>
          <h1>
            닉네임: <b>{nickname}</b>
          </h1>
        </div>
      </div>
    </>
  );
};

export default InfoTestUseEffect;
