import { Button } from "antd";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const CountUseReducerTest = () => {
  //설정2, useReducer(리듀서함수,초깃값) 사용하기
  // 반환값 : 상태값, dispatch 함수
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  //이벤트 핸ㄴ들러,입력값에변경사항을 반영하는로직
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        {/* 입력창인데, 값을 입력시, onChange 이벤트 핸들러 동작해서, 결과 뷰에 반영 */}
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
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
  );
};

export default CountUseReducerTest;
