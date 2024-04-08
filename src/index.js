//"react"라는 모듈을 React라는 별칭으로 불러옴
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

console.log(ReactDOM.createRoot);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  /* 최상위 요소는 반드시 하나여야함 */
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
