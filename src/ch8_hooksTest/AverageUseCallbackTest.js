import React, { useState, useMemo, useCallback } from "react";
import { Button } from "antd";

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

const AverageUseCallbackTest = () => {
  // 초기값은 배열
  // 숫자들을 담을 임시배열
  const [list, setList] = useState([]);
  // 숫자타입 문자열 , 연산시 정수로 변환 필요
  const [number, setNumber] = useState("");

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
  }, [number, list]);
  // 임의로 결과값을 만들어서 , 이값이 변경시에만 연산계산하기
  // useEffect 와 비슷,
  //   const avgResult = useMemo(콜백함수,의존성배열)
  // list 배열에 숫자 추가가되면서 , 그떄 연산이 수행이됨
  // 전에는 값을 입력하는 순간에도 연산이 되었다
  const avgResult = useMemo(() => doAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <Button type="primary" danger onClick={onInsert}>
        등록하기
      </Button>
      {/* 리액트 리스트 출력시 키가 의무적으로 설정 주의 */}

      <ul>
        {/* 테스트라 인덱스를 쓴다 */}
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      {/* <div>평균값 : {doAverage(list)} </div> */}
      {/*  useMemo 사용후  */}
      <div>평균값 : {avgResult} </div>
    </div>
  );
};

export default AverageUseCallbackTest;
