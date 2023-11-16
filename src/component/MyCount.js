//함수형 컴포넌트
// +1 -1 의 기본적인 동작은 동일함
// state를 구현하는 방법이 조금다름
// useState 라는 hooks 를 미리 사용함

import React, { useState } from "react";

// const MyCount = () => {
//   //state 할당하는 부분이 ,, useState 사용
//   const [number, setNumnbr] = useState(0);
//   const [anotherNumber, setAnotherNumber] = useState(100);
//   return (
//     <div>
//       <h1> {number} </h1>
//       {/* <h2>다른 숫자 : {anotherNumber}</h2> */}

//       <button
//         class="btn btn-primary"
//         onClick={() => {
//           setNumnbr({ number: number + 1 });
//           // this.setState({ number: this.state.number + 1 });
//           // 한번 클릭 씩 , 값이 2개가 증가하도록 설정.
//           // 안되는 문제점 확인. (동작여부.)
//           // 바로 반영이 안되는 문제점.
//           // 해결책으로 , 객체 대신에 여기에 함수로 대체함.
//           // this.setState({ number: this.state.number + 1 });
//           // 해결책
//           setNumnbr(
//             (prevState) => {
//               return {
//                 number: prevState.number + 1,
//               };
//               //state 값 변경 후, 특정 함수 호출 하기.
//             },
//             () => {
//               console.log("state 값 변경후 , 함수 호출했어요.");
//             }
//           );
//         }}
//       >
//         +1
//       </button>

//       <button
//         class="btn btn-success"
//         onClick={() => {
//           setNumnbr({ number: number - 1 });
//         }}
//       >
//         {" "}
//         -1{" "}
//       </button>
//     </div>
//   );
//   //   const [number, setNumnbr] = useState(0); /useState("");
//   // useState의 결과값,
//   // useState(0)-> 초기값 : 0
//   // 첫번째 : 상태값
//   // 두번째 : 세터함수

//   return <div></div>;
// };

// export default MyCount;

const MyCount = () => {
  // state를 할당하는 부분이 , useState 사용.
  const [number, setNumber] = useState(0);
  // const [anotherNumber, setAnoterhNumber] = useState(100);
  // useState 의 결과값 타입이 배열
  // useState(0) : 초깃값 : number = 0
  // 첫번째 : 상태값,
  // 두번째 : 세터 함수.
  const onClickUp = () => setNumber(number + 1);
  const onClickDown = () => setNumber(number - 1);
  return (
    <div>
      <h1>{number}</h1>
      {/* <h2>다른 숫자 : {anotherNumber}</h2> */}
      <button onClick={onClickUp}>+1</button>

      <button
        // onClick 의 값으로 함수를 사용
        onClick={onClickDown}
      >
        -1
      </button>
    </div>
  );
};

export default MyCount;
