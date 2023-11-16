// rsc
// axios 모듈을 써서
// 제이슨 플레이스 홀더 , 뉴스 api받아와서작업을 할 예정
// https://jsonplaceholder.typicode.com/
import React, { useState } from "react";
import axios from "axios";
import { Button } from "antd";
// 'https://jsonplaceholder.typicode.com/todos/1'
const ApiTest = () => {
  // REST API 서버에서 임시로 받아온 data,setData 확인 히기
  const [data, setData] = useState(null);
  // 이벤트 핸들러
  // const onClick = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos/1")
  //     //위에 get 함수로 데이터를 받는것을 성공했다면 then 이 실행이된다
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };

  // 이벤트 핸들러 await는 promise를 반환하는 함수 앞에 사용 ()
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {/* 버튼으로 가져오고 */}
      <Button type="primary" onClick={onClick}>
        가져오기
      </Button>
      <div>
        {data && (
          <textarea
            row={8}
            // data :stringify 의 함수의 출력할 data
            // null : 모양을 의미하고 문자열을 의미
            // 2: 들여쓰기
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          />
        )}
      </div>
    </div>
  );
};

export default ApiTest;
