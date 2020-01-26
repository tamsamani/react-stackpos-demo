import React from "react";
import { render } from "react-dom";

import "./index.scss";


const StackCard = ({ className, children, ...props }) => (
  <div className={className + " p-1 rounded shadow"} {...props}>
    {children}
  </div>
);

const Signature = () => <div className="w-full p-2" >
  <div className="border rounded-sm shadow p-4 w-full" >
    <div>LOGO</div>
    <div>Name & Role</div>
    <div>Contact Informations</div>
  </div>
</div>;

function App() {
  return (
    <div className="relative bg-gray-100 h-screen w-screen">
      <div className="text-lg font-bold text-center"> HEADER POKE GAME </div>
      <div className="m-1 p-1 rounded bg-red-200">
        Name only
      </div>
      <Signature />
    </div>
  );
}

render(<App />, document.getElementById("root"));
