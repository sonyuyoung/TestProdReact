import logo from "./logo.svg";
import "./App.css";
// 자식 컴포넌트 요소

import { Component } from "react";
import { Button } from "antd";
import LifeCycleTest from "./ch7_classLifeCycle/LifeCycleTest";

function getRandomColor() {
  //0~1사이의 숫자에서 16777215 이만큼 : RGB #00ff00
  // 0~16777216 사이의 값을 랜덤하게 출력하기
  // 출력의 모양은 16진수 : 0~f
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  // 부모 App -> 자식 컴포넌트로, props에 color 전달하기.
  state = {
    color: "#000000",
  };
  // 자식에게 색깔을 전달하기 위해서, 이벤트 함수를 수행.
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>
          랜덤색상
        </Button>
        {/* 부모 컴포넌트 App  자식컴포넌트 LifeCycleTest 
        color={this.state.color} 전달 props 전달방식
        color 속성이 props 에 담겨서 전달 자식입장에서는props.color  */}

        <LifeCycleTest color={this.state.color} />
      </div>
    );
  }
}

export default App;
