// SQL -> RDBMS -> 각테이블마다 pk 존재함 이값을 인덱스로 .
// 결론 : 데이터 연동해서 ,리스트출력시 key설정 반드시 해야함
//인덱스는 반복이 가능한, 반복이 가능한 iterable 한 그룹을 처리하기는 하지만,
// 유니크 , 중복 되면 안됩니다.
//rsc
import React from "react";
import { useState } from "react";
import { Button } from "antd";

const DataListKeyAddDelTest = () => {
  //test :상태값타입 : 배열 ,요소의 타입 : 객체
  // 초기값 배열로기본 4개 요소 넣고 ,더미데이터
  //useState 라는 hooks
  const [testArr, setTestArr] = useState([
    { id: 1, text: "스프링" },
    { id: 2, text: "부트" },
    { id: 3, text: "안드로이드" },
    { id: 4, text: "리액트" },
  ]);
  // id , text관련 input 태그 설정
  const [inputText, setInputText] = useState("");
  // 기본 아이디 4까지 사용했고 그이후의 i
  // d값 5부터 기본값이 5로 들어가있음
  const [nextId, setNextId] = useState(5);
  // 리스트 출력하기->리스트 컴포넌트 , 리스트의 아이템 컴포넌트

  // map을제외하고 모두 임의의 밴수
  // 여기에 더블클릭 이벤트를 넣고 ,
  // 삭제기능 추가하면됨
  const testArrList = testArr.map((item) => (
    <li key={item.id} onDoubleClick={() => onRemoveText(item.id)}>
      {item.text}
    </li>
  ));

  //   const testArrList = test.map((item) => <li key={item.id}>{item.id}</li>);
  // Key값 의무사항 , 하지만 오류먼저 확인후 설정하기

  //데이터 추가 . TextInput 부분이 변경시 세터함수로 변경사항을 업데이트함
  const onChangeText = (e) => setInputText(e.target.value);

  const onClickText = () => {
    // 이름상관무
    const nextTestArr = testArr.concat({
      id: nextId,
      //inputText 입력된 내용이 변경을 감지하면서 단어업데이트 최종단어
      text: inputText,
    });
    // id 추가 되어서 1씩 증가하는 로직
    setNextId(nextId + 1);
    // 배열에 새로운 요소가 추가된 배열을 업데이트
    setTestArr(nextTestArr);
    // 입력 완료 했으니, 입력창 비우기.
    setInputText("");
  };
  //데이터 삭제하고 해당아이템요소 더블클릭해서 삭제하기
  //filter 이용하기
  //(id) 뭘지울지
  // 배열의 내장함수를 이용하고있음.
  // 새로 그림.

  //filter (콜백함수(조건) filter 조건이 참이되는 요소만뽑아서 새로운배열을 만듬 )
  //item.id!==id : 틀리면 참 같으면 거짓
  //item.id==id  같으면 참 다르면 거짓
  //원본 id : 1~4 ,내가 삭제할 아이디가 3번
  const onRemoveText = (id) => {
    // item.id !== id -> 틀리면 참, 같으면 거짓
    // item.id == id -> 같으면 참, 다르면 거짓.
    // filter(콜백함수(조건)),
    // filter 조건이 참이되는 요소만 뽑아서, 새로운 배열을 만든다.
    //예) 원본 id : 1~4 , 삭제할 아이디가 : 3번
    // 1~4 검사
    // 1 !== 3 : true -> 1 필터됨, 결과 배열 [1]
    // 2 !== 3 : true -> 2 필터됨, 결과 배열 [1,2]
    // 3 !== 3 : false -> 3 필터 안됨, 결과 배열 [1,2], 포함 안됨.
    // 4 !== 3 : true -> 4 필터됨, 결과 배열 [1,2,4]
    const nextTestArr2 = testArr.filter((item) => item.id !== id);
    // 조건이 참이면 걸러요 .
    // 필터가 된 , 원소를 제거한 새로운 배열을 업데이트 , 세터로
    setTestArr(nextTestArr2);
  };

  // 키 이벤트 추가 해보기.
  // 키보드에서 엔터 키 입력시, 클릭 이벤트 호출 연결 확인.
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickText();
    }
  };

  return (
    <div>
      {/* 감지 */}
      <input
        value={inputText}
        onChange={onChangeText}
        onKeyPress={onKeyPress}
      ></input>
      <Button type="primary" onClick={onClickText}>
        추가하기
      </Button>

      <ul>{testArrList}</ul>
    </div>
  );
};

export default DataListKeyAddDelTest;
