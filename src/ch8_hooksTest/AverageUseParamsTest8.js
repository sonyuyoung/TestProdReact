// 설정1 설정2 적용

import React, { useState, useMemo, useCallback, useRef } from "react";
import { Button } from "antd";

import { useParams } from "react-router-dom";

//함수1->변경 -useCallback
const doAverage = (numbers) => {
  // 값이 변경이있을때만 , 연산을하고싶음.
  console.log("평균계산중 -=========-");
  if (numbers.length === 0) return 0;
  // 초기값이 배당이안되면 0으로 시작
  const sum = numbers.reduce((a, b) => a + b);
  // 합을 해당길이만큼나누기
  return sum / numbers.length;
};

//순서 2
const AverageUseParamsTest8 = () => {
  // 초기값은 배열
  // 숫자들을 담을 임시배열
  const [list, setList] = useState([]);
  // 숫자타입 문자열 , 연산시 정수로 변환 필요
  const [number, setNumber] = useState("");
  //초기값을 0 으로 선언
  const inputElement = useRef(null);

  //  path="UseParamsTest:id" id 가져와서재할당
  const { id } = useParams();
  //전
  //변경했을때 이벤트 핸들러 추가
  //   const onChange = (e) => {
  //     setNumber(e.target.value);
  //   };
  //후 : 정의 useCallback(콜백함수,의존성배열)
  // 의존성배열의 모양 = [] 빈배열 , 마운트시 한번만 함수를 생성함
  const onChange = useCallback((e) => {
    console.log("useCallback 확인중.onChange 호출");
    setNumber(e.target.value);
  }, []);

  const onRemove = useCallback(
    (index) => {
      const nextList = [...list];
      nextList.splice(index, 1);
      setList(nextList);
    },
    [list]
  );

  //전
  //숫자추가
  //   const onInsert = (e) => {
  //     // 문자열 ->정수변환->리스트에 추가해서 -> 새로운배열을 생성한것
  //     const nextList = list.concat(parseInt(number));
  //     //변경된 리스트를셋팅
  //     setList(nextList);
  //     setNumber("");
  //   };
  //@@@@@@변경
  const onInsert = useCallback(() => {
    console.log("useCallback 확인중.onInsert  호출");
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputElement.current.focus();
  }, [number, list]);

  // 키 이벤트 추가 해보기.
  // 키보드에서 엔터 키 입력시, 클릭 이벤트 호출 연결 확인.
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  // 임의로 결과값을 만들어서 , 이값이 변경시에만 연산계산하기
  // useEffect 와 비슷,
  //   const avgResult = useMemo(콜백함수,의존성배열)
  // list 배열에 숫자 추가가되면서 , 그떄 연산이 수행이됨
  // 전에는 값을 입력하는 순간에도 연산이 되었다
  const avgResult = useMemo(() => doAverage(list), [list]);

  return (
    <div>
      <h1>AverageUseParamsTest 가지고온값 : {id}</h1>
      <input
        value={number}
        onChange={onChange}
        ref={inputElement}
        onKeyPress={onKeyPress}
      />
      <Button type="primary" danger onClick={onInsert}>
        등록하기
      </Button>
      {/* 리액트 리스트 출력시 키가 의무적으로 설정 주의 */}
      <ul>
        {list.map((value, index) => (
          <li key={index} onDoubleClick={() => onRemove(index)}>
            {value}
          </li>
        ))}
      </ul>

      {/* <ul> */}
      {/* 테스트라 인덱스를 쓴다 */}
      {/* {list.map((value, index) => (
          <li key={index}>{value}</li> */}
      {/* ))}
      </ul> */}

      {/* <div>평균값 : {doAverage(list)} </div> */}
      {/*  useMemo 사용후  */}
      <div>평균값 : {avgResult} </div>
    </div>
  );
};

export default AverageUseParamsTest8;
