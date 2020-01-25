import React from "react";
import { render } from "react-dom";

import "./index.scss";

const StackCard = ({ className, children, ...props }) => (
  <div className={className + " p-1 rounded shadow"} {...props}>
    {children}
  </div>
);

function App() {
  return (
    <div className="relative bg-gray-100 h-screen w-screen">
      <div className="text-lg font-bold text-center"> HEADER POKE GAME </div>
      <div className="m-1 p-1 rounded bg-red-200">
        <StackCard>Name 2</StackCard>
        <StackCard>Name 3</StackCard>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
