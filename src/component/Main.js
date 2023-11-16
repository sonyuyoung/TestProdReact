// Main 임시 페이지
import React from "react";
// yarn add react-router-dom
// npm install react-router-dom
// 라우팅 모듈 , 도구 설치.
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";
import { Component } from "react";

// styled-component,  컴포넌트에서 좀더 편하게 css  작업하는 모듈.
// yarn add styled-components
// npm install styled-components
// 확장팩: styled-components
// 설치후 모듈가져와서 사용하기

// styled-components 사용해보기
// 예제 styled.원하는 태그선택 `(백틱) '백틱 열고 닫고
// 이사이에css 적용
//백틱 옵션+물결`
const MainTitleTextCss = styled.p`
  font-size: 30px;
  background-color: pink;
  font-family: "NexonLv1Gothic";
`;
const MainTextCss = styled.p`
  font-size: 20px;
  font-weight: bold;
  background-color: red;
  text-align: center;
`;
//Wrapper 라고 해서 블록 부분 설정.
const Wrapper = styled.div`
  padding: 20px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;

// Container 만들기.
const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin-left: 20px;
  // & : 현재 태그
  // div 태그 하위의 자식 태그를 마지막 자식 태그를 제외하고
  // 각 요소의 마진 바텀을 16 px 씩 간격을 주겠다.
  & {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const Main = () => {
  // useNavigate 라는 훅스를 이용해서, 페이징 하기..
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>
        <h1>메인 화면입니다.</h1>
        {/* css 적용하기 */}
        <Container>
          <MainTitleTextCss>styled-components test</MainTitleTextCss>

          <MainTextCss>2번째 텍스트 효과 확인하기.</MainTextCss>
          {/* join 컴포넌트로 이동하는 버튼 하나 추가 */}
          <Button
            title="회원가입 이동"
            type="primary"
            onClick={() => {
              navigate("/join");
            }}
          >
            회원가입 이동
          </Button>
          <br />
          <Button
            title="mycount 이동"
            type="primary"
            onClick={() => {
              navigate("/mycount");
            }}
          >
            mycount 이동
          </Button>
          <Button
            title="스크롤 Ref 이동"
            type="primary"
            onClick={() => {
              navigate("/scrollRefTest");
            }}
          >
            스크롤 Ref 이동
          </Button>
          <Button
            title="listKeyDataAddDel 이동 "
            type="primary"
            onClick={() => {
              navigate("/listKeyDataAddDel");
            }}
          >
            키설정의무화 확인 데이터 추가 삭제이동
          </Button>

          <br />
          <Button
            title="클래스형 컴포넌트 생명주기 테스트 "
            type="primary"
            onClick={() => {
              navigate("/ClassLifeCycleTest");
            }}
          >
            클래스형 컴포넌트 생명주기 테스트
          </Button>

          <br />
          <Button
            title="useStateTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/useStateTest");
            }}
          >
            useStateTest 테스트
          </Button>
          <Button
            title="useEffectTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/useEffectTest");
            }}
          >
            useEffectTest 테스트
          </Button>
          <Button
            title="countUseReducerTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/useReducerTest");
            }}
          >
            countUseReducerTest 테스트
          </Button>
          <Button
            title="useReducerTest2 테스트 "
            type="primary"
            danger
            onClick={() => {
              navigate("/useReducerTest2");
            }}
          >
            useReducerTest2 테스트
          </Button>
          <Button
            title="useAverageMemo 테스트 "
            type="primary"
            danger
            onClick={() => {
              navigate("/useAverageMemo");
            }}
          >
            useAverageMemo 테스트
          </Button>
          <Button
            title="useCallback 테스트 "
            type="primary"
            danger
            onClick={() => {
              navigate("/useCallback");
            }}
          >
            useCallback 테스트
          </Button>
          <Button
            title="UseRefTest 테스트 "
            type="primary"
            danger
            onClick={() => {
              navigate("/UseRefTest ");
            }}
          >
            UseRefTest 테스트
          </Button>
          <br />
          <Button
            title="useParamsTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/useParamsTest ");
            }}
          >
            useParamsTest : 주소에/숫자붙이기
          </Button>

          <br />
          <Button
            title="customHooksTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/customHooksTest");
            }}
          >
            customHooksTest 테스트
          </Button>
          <Button
            title="sassTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/sassTest");
            }}
          >
            sassTest 테스트
          </Button>
          <Button
            title="styledComponentsTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/styledComponentsTest");
            }}
          >
            styledComponentsTest 테스트
          </Button>
          <br></br>
          <Button
            title="todolistComponentTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/todolistComponentTest");
            }}
          >
            todolistComponentTest 테스트
          </Button>
          <br></br>
          <Button
            title="immerTest"
            type="primary"
            onClick={() => {
              navigate("/immerTest");
            }}
          >
            immerTest, 불변성 쉽게 유지
          </Button>

          <br></br>
          <Button
            title="testZone 테스트 "
            type="primary"
            onClick={() => {
              navigate("/testZone");
            }}
          >
            testZone 테스트
          </Button>
          <br></br>
          <Button
            title="apiTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/apiTest");
            }}
          >
            apiTest 확인
          </Button>
          <br></br>
          <Button
            title="apiTestKoreaNews 테스트 "
            type="primary"
            onClick={() => {
              navigate("/apiTestKoreaNews");
            }}
          >
            apiTestKoreaNews 확인
          </Button>
          <br></br>
          <Button
            title="mainNews 테스트 "
            type="primary"
            onClick={() => {
              navigate("/mainNews");
            }}
          >
            mainNews 확인
          </Button>
          <br></br>
          <Button
            title="categories 테스트 "
            type="primary"
            onClick={() => {
              navigate("/categories");
            }}
          >
            categories 확인
          </Button>

          <br />
          <Button
            title="newsPageTest/:category"
            type="primary"
            onClick={() => {
              navigate("/newsPageTest/:category");
            }}
          >
            newsPageTest/:category 확인
          </Button>
          <br />
          <Button
            title="contextAPITest"
            type="primary"
            onClick={() => {
              navigate("/contextAPITest");
            }}
          >
            contextAPITest 확인
          </Button>
          <br />
          <Button
            title="books"
            type="primary"
            onClick={() => {
              navigate("/books");
            }}
          >
            books 확인
          </Button>
          <br />
          <Button
            title="mainBook"
            type="primary"
            onClick={() => {
              navigate("/mainBook");
            }}
          >
            mainBook 확인
          </Button>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Main;
