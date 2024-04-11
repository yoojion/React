//"react"라는 모듈을 React라는 별칭으로 불러옴
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  /* 최상위 요소는 반드시 하나여야함 */
  /* 싱글태그는 뒤에 / 있어야함! */
  <>
    <App />
  </>
);
