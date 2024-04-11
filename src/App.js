//App 이라는 함수형 컴포넌트 작성

/* const App = () => {
  return <h1>앱컴포넌트</h1>;
};
export default App; */

import Fruits from "./Fruits";
import Fish from "./Fish";
// import Orange from "./Orange";

export default function App() {
  return (
    <>
      {" "}
      {/* Franment */}
      <div>앱컴포넌트</div> <Fruits />
      <Fish />
    </>
  );
}
/* 
컴포넌트는 함수형으로 만든다
함수컴포넌트의 이름은 대문자로 시작한다.
컴포넌트는 export문을 사용하여 다른 모듈에서 사용할 수 있도록 내보내야 한다 

함수 컴포넌트의 바디에는 return 문을 사용하여 UI요소(태그)를 반환하도록 한다.
*/

/* 
jsx규칙
1.대가리는 하나
*/
