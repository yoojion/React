/* 
컴포넌트는 파일 하나에 여러개를 생성할 수 있다.
같은 파일에 존재하는 컴포넌트끼리는 import를 생략해도 삽입이 된다. 
*/
import "./Fruits.css";
const none = { listStyle: "none" };

/* 함수복습 */
const 믹서기 = (n1, n2) => {
  //함수끼리는 값을 전달할 수 있다.
  let 주스 = n1 + n2;
  return print(주스);
};
const print = (a) => {
  console.log(a);
};
믹서기("딸기", "사과");
믹서기("포도", "딸기");
믹서기("오렌지", "사과");
믹서기("망고", "바나나");

const Fruits = () => {
  return (
    <ul style={none}>
      <Fruit 알맹이="🍎" 가격="5000" />
      <Fruit 알맹이="🍕" 가격="15000" />
      <Apple 애플="이것은 Apple 컴포넌트" />
      <Banana/>
    </ul>
  );
};
/* 
리액트에서는 컴포넌트 함수끼리 데이터(값)를 주고 받을 때 객체형으로 전달된다.
만약 전달받은 값을 렌더링해야할 때는 객체 하위 키값을 작성한다. 
하위에 들어오는 키값은 사용자 정의 속성이다.
*/
const Fruit = (props) => {
  console.log(props);
  return (
    <li className="fruit">
      {props.알맹이}
      {props.가격}
    </li>
  );
};

const Apple = (props) => {
  return <li className="apple">{props.애플}</li>;
};
const Banana = () => {
  return <li className="banana">🍌</li>;
};
export default Fruits;

