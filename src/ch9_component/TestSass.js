//방금 만든 css 문법을 테스트할 빈도화지

import React from "react";
import "./SassComponent.scss";
import cssmodule from "./CssModule.module.css";

//css 모듈 데스트 해보기
const TestSass = () => {
  return (
    <>
      <div className={cssmodule.wrapper}>css모듈 어쩌구</div>
      <div className="testGlobal">CSS Modul testGlobal 테스트 해보기2</div>
      <div className={`${cssmodule.wrapper}${cssmodule.wrapper2}`}>
        css모듈 어쩌구
      </div>
      <div className="SassTest">
        <div className="box red"></div>
        <div className="box blue"></div>
        <div className="box green"></div>
      </div>
    </>
  );
};

export default TestSass;
