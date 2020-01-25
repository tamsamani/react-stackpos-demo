import React from "react";
import { render } from "react-dom";

import "./index.scss";

import {initRandomGen, randomList100} from "./data/randomMonsterGen";

const StackCard = ({ className, children, ...props }) => (
  <div className={className + " p-1 rounded shadow"} {...props}>
    {children}
  </div>
);

let monsterGen = initRandomGen(1, 11, (v) => v %100);

function App() {
  return (
    <div className="relative bg-gray-100 h-screen w-screen">
      <div className="text-lg font-bold text-center"> HEADER POKE GAME </div>
      <div className="m-1 p-1 rounded bg-red-200">
        <StackCard>Name { monsterGen(1) }</StackCard>
        <StackCard>Name { randomList100.map((v, i) => <div key={i} >{i}:{v}</div>) }</StackCard>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
