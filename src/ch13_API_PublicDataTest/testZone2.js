// 비동기 방식 설명 및
// setTimeout 함수소개
// 콜백지옥 모양 소개
// Promise 로 개선하는부분
// axios 진행하기

// 동기 : 작업순서 1,2,3
// 각작업이 순서대로 완료가되면 다른작업을 진행 = > 동기적방식
// 비동기 : 작업순서 , 완료되는 순서에 상관없이 같이 실행을하고 , 끝나는대로알려준다
// =>비동기식

function printHello() {
  //   console.log("hihihihi");
}
// setTimeout(콜백함수,기다리는시간) : 기다리는 시간후에 콜백함수가 등장
// 작업1
setTimeout(printHello, 3000);
// 작업2
// console.log("대기중입니당");
// 포인트
// 다같이 실행후 작업이 완료가 되는대로 호출이된다

// 콜백 함수
// setTimeout(콜백함수,기다리는시간)처럼
function decrease(number, callbackFunction) {
  setTimeout(() => {
    const result = number - 1;
    if (callbackFunction) {
      callbackFunction(result);
    }
  }, 1000);
}
// 호출해보기.
// decrease(0, (result) => {
//   console.log(result);
// });

// 콜백 지옥 함수 모양 보기.
// console.log("작업 시작");
// decrease(0, (result) => {
//   console.log(result);
//   decrease(result, (result) => {
//     console.log(result);
//     decrease(result, (result) => {
//       console.log(result);
//       decrease(result, (result) => {
//         console.log(result);
//         console.log("작업완료");
//       });
//     });
//   });
// });

// promise 로 개선하기.
// 결론 , 기존의 콜백 함수모양으로 작업시 가독성떨어지고 불편함
function decrease2(number) {
  // 성공시 수행할함수 : resolve
  // 실패시 reject
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number - 1;
      if (result < 50) {
        const error = new Error("Error");
        reject(error);
      } else {
        resolve(result);
      }
    }, 1000);
  });
  return promise;
}
// 1초후 수행될 콜백함수
//() => {
//     const result = number - 1;
//     if (result < 50) {
//       const error = new Error("Error");
//       reject(error);
//     } else {
//       resolve(result);
//     }
//   }

// promise이용해서
// decrease2(60) 를 넣으면 -1 이되고 59는 50보다 작지않으니까
// resolve(result);
// console.log("작업 시작");
// decrease2(60)
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .catch((e) => console.log(e));

// async , await 확인해보기
// decrease2함수내에 promise구성이되었고,
// 이 함수를 async , await  변경해서 조금더 가독성이 좋게하고 ,,

async function test() {
  try {
    let result = await decrease2(60);
    console.log(result);

    result = await decrease2(result);
    console.log(result);

    result = await decrease2(result);
    console.log(result);

    result = await decrease2(result);
    console.log(result);

    result = await decrease2(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
// 작업1)
console.log("작업시작,async , await 이용해서 가독성높이기");
// 작업2)
test();
