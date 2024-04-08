//동위에 있는 logo.svg 파일을  logo라는 이름으로 불러옴
import logo from "./logo.svg";
import img from "./img.jpg";
import Mango from "./Mango";
import Card from "./Card";
import "./App.css";

//컴포넌트 만들기
//반복되는 UI 요소(태그)를 반환하는 함수
/* 
컴포넌트 함수는 반드시 
1. 이름이 대문자로 시작해야함
2. 반환값이 UI 요소여야함
 */
/* 
리액트의 컴포넌트는 사용자 정의 태그(UI)를 만드는 기술
문법은 jsx를 사용
함수에 대문자 이름을 붙여주고 반환값으로 태그를 작성함
함수를 호출할때 선언한 함수명을 태그처럼 부른다.
*/
function Comp() {
  return <div className="text">새컴포넌트</div>;
}
function Nav() {
  return <span>span</span>;
}

function App() {
  return (
    <div className="App">
      <Mango />
      <Card />
      <Comp />
      <Comp />
      <Comp />
      <Comp />
      <Comp />
      <Comp />
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={img} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
