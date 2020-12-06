import val, { fn } from "./libs/fn";
import "./assets/css/css.css";
import article01 from "./articles/NodeJS-01.md";

import logo from "./assets/images/logo.png";

if (module.hot) {
  //如果开启 HMR
  module.hot.accept("./libs/fn.js", function () {
    // 更新逻辑
    // document.onclick = fn;
  });
}

let btn = document.querySelector("button");

btn.onclick = function () {
  fn();
};
