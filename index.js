import React from "react";
import { render } from "react-dom";

import { Icon } from "@mdi/react";
import { mdiAccount } from "@mdi/js";

import "./index.scss";

const CirclePath = ({ r, cx, cy, ...props }) => (
  <path
    d={`M ${cx - r}, ${cy} a ${r},${r} 0 1,0 ${2 * r},0 a ${r},${r} 0 1,0 ${-2 *
      r},0`}
    {...props}
  />
);
CirclePath.increment = 0;

const CirculingText = ({ size, fontSize = 16, id, text, ...props}) => {
  let svgSize = size - (fontSize *2);
  let pid = id + "CirclePath" + CirclePath.increment++;
  return (
    <svg width={size} height={size} viewbox={`0 0 ${size} ${size}`}>
      <CirclePath
        cx={size / 2} cy={size / 2} r={size / 2 - 4}
        id={pid} fill="red" opacity={0.18}
      />
      <CirclePath
        cx={size/2} cy={size / 2} r={svgSize / 2}
        fill="blue" opacity={0.18}
      />
      <text width={size} fontSize={fontSize}>
        <textPath xlinkHref={"#" + pid} startOffset={Math.PI*size/6}>
          {text || props.children}
        </textPath>
      </text>
    </svg>
  );
};

const StackCard = ({ className, children, ...props }) => (
  <div className={className + " p-1 rounded shadow"} {...props}>
    {children}
  </div>
);

const Signature = () => (
  <div className="w-full p-2">
    <div className="border rounded-sm shadow p-4 w-full">
      <div>LOGO</div>
      <div>Name & Role</div>
      <div>Contact Informations</div>
    </div>
  </div>
);

function App() {
  return (
    <div className="relative bg-gray-100 h-screen w-screen">
      <div className="text-lg font-bold text-center"> HEADER POKE GAME </div>
      <div className="m-1 p-1 rounded bg-red-200">Name only</div>
      <Signature />

      <div className="bg-red-100">
        <div>
          <Icon path={mdiAccount} size={1} />
          <svg width={240} height={240} viewboax={[0, 0, 240, 240]}>
            <CirclePath
              id="circlePath2"
              cx={240 * 0.5}
              cy={240 * 0.5}
              r={48 + 16}
              fill="none"
            />
            <circle
              id="circlePath1"
              cx="50%"
              cy="50%"
              r={48}
              fill="#5454f1"
              opacity={0.15}
            />
            <text width={240} fontSize="16">
              <textPath xlinkHref="#circlePath2" startOffset={60}>
                Hire to GET the Updates
              </textPath>
            </text>
          </svg>
          <CirculingText size={220} fontSize={54} >Yes You get it</CirculingText>
        </div>
        Nice We have something
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
