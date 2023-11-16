// 클래스형 컴포넌트 rcc
import { Button } from "antd";
import React, { Component } from "react";
class LifeCycleTest extends Component {
  // 클래스형 컴포넌트에 사용되는 초기값 세팅모양 state를사용
  // 생명주기를 알아보기위한 예제코드
  // https://velog.io/@velopertc\
  state = {
    number: 0,
    color: null,
  };
  // useRef 처럼 특정의 태그요소에 접근하기 위한 도구로 사용
  // 웹 document.getElement 앱: findByViewId (?)
  myRef = null;

  // 생성전에 생정자 호출  여기서 부터 부모로 부터 전달받은
  // props내용이 담김
  constructor(props) {
    // 클래스가 혼자 동작을 못하고 , 반드시 상속을 받아야함
    // 상속받은 부모를 초기화해줘야함
    super(props);
    console.log("생성될때 constructor호출");
  }

  //생명주기 2번째 (getDeriveredStateFromProps)
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("마운트(생성) /업데이트 getDerivedStateFromProps 2번 ");
    //마운트(생성) 호출, 업데이트시 호출 해서 변경할때 비교를함
    if (nextProps.color !== prevState.color) {
      // 이전에 있던 상태와 다르면
      return { color: nextProps.color };
    }
    return null;
  }
  // 언마우트하나뿐
  componentWillUnmount() {
    console.log("componentWillUnmount호출 ");
  }

  // 4번째 : 마운트 완료됨
  componentDidMount() {
    console.log("마운트 4번째 호출 : 마운트완료");
  }

  // 업데이트 할때 : 업데이트 변경을 할까여 ?
  shouldComponentUpdate(nextProps, nextState) {
    console.log("업데이트할때 2번호출: ", nextProps, nextState);
    // 숫자 일의자리가 4이면 리렌더링 안함
    return nextState.number % 10 !== 4;
  }
  // 업데이트의 4번째 호출 getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate:", prevProps.color, this.props.color);
    if (prevProps.color !== this.props.color) {
      // myRef 특정태그의 요소를 가리키거나 작업시 사용
      // 적용부분
      return this.myRef.style.color;
    }
    return null;
  }

  // 5번째 호출 : 업데이트 완료
  // 업데이트 완료
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("5번째 호출 : componentDidUpdate 호출. ", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기전 색상", snapshot);
    }
  }

  //이벤트 핸들러 추가 , 숫자변경
  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  // 3번째 : 마운트 트리, 화면에(무조건) 그려주는함수 jsx 함수사용법
  render() {
    console.log("render 호출: 마운트(생성) 혹은 업데이트시 호출  ");

    // 기본 스타일 정의
    const style = {
      color: this.props.color,
    };
    //jsx 문법
    return (
      <div>
        <h1
          style={style}
          //myRef , 해당 돔을 조회 , 사용하기, 설정2번
          // 예 myRef = useRef(null)
          ref={(ref) => (this.myRef = ref)}
        >
          number값 조회: {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <Button type="primary" onClick={this.handleClick}>
          더하기 +1
        </Button>
      </div>
    );
  }
}

export default LifeCycleTest;

// 함수형 컴포넌트에서는 hooks state const [,setstate] =useState(0)
