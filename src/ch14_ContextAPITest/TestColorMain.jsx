// context API 테스트 메인으로 사용할 예정.
// 부모 컴포넌트로 사용함.
import React from "react";
import TestColorBox from "./TestColorBox";
import ColorContext, { ColorProvider } from "./testColor";
import TestSelectColors from "./TestSelectColors";

const TestColorMain = () => {
  return (
    //    예시1
    //    <div>
    //       <ColorContext.Provider value={{ color: "red" }}>
    //         <TestColorBox />
    //       </ColorContext.Provider>
    //     </div>
    // ColorProvider : 여기에 전역에서 만든
    // 기본색깔 다 있음. 컬러 서브컬러 선언
    <ColorProvider>
      <TestSelectColors />
      <TestColorBox />
    </ColorProvider>
  );
};
export default TestColorMain;
