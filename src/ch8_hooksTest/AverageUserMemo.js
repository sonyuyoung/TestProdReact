// rsc
// 평균의 값을 구한다
import { Button } from "antd";
import React, { useState, useMemo } from "react";
// 샘플함수 : 특정 연산 하는 과정을 샘플로 만들고 ,
// userMemo 사용하기전과 후의 과정을보기
// userMemo 사용하기전 : 숫자를 입력하는 과정에서도 동일한 연살을 수행한다
//사용후 특정의 결과값이 변경시에만 동작하기
// 기존연산값을 가지고와서 재사용 !
// numbers가입력이되면
const doAverage = (numbers) => {
  // 값이 변경이있을때만 , 연산을하고싶음.
  console.log("평균계산중 ============");
  if (numbers.length === 0) return 0;
  // 초기값이 배당이안되면 0으로 시작
  const sum = numbers.reduce((a, b) => a + b);
  // 합을 해당길이만큼나누기
  return sum / numbers.length;
};

const AverageUserMemo = () => {
  // 초기값은 배열
  // 숫자들을 담을 임시배열
  const [list, setList] = useState([]);
  // 숫자타입 문자열 , 연산시 정수로 변환 필요
  const [number, setNumber] = useState("");
  //변경했을때 이벤트 핸들러 추가
  const onChange = (e) => {
    setNumber(e.target.value);
  };
  //숫자추가
  const onInsert = (e) => {
    // 문자열 ->정수변환->리스트에 추가해서 -> 새로운배열을 생성한것
    const nextList = list.concat(parseInt(number));
    //변경된 리스트를셋팅
    setList(nextList);
    setNumber("");
  };

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

export default AverageUserMemo;
