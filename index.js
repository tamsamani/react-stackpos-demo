import React from "react";
import { render } from "react-dom";

import { Icon } from "@mdi/react";
import { mdiAccount } from "@mdi/js";

import "./index.scss";

import CirclePath from "./components/CirclePath";
import CirculingText from "./components/CirculingText";

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

const calculateScroe = ({ formatScore, viewScore, humanScore }) => {
  let total = formatScore + viewScore + humanScore;
  if (total == 0) {
    return 0;
  }
  return (formatScore * 0.2 + viewScore * 0.3 + humanScore * 0.5) / total;
};

const ARNtoSVG = ({ ARN, ...props }) => {
  let Comp;
  const scores = {
    formatScore: 0,
    viewScore: 0,
    humanScore: 0
  };
  try {
    xjskn + fkji8e;
  } catch (error) {
    Comp = <div style={{ fontWeight: "bold", color: "red" }}>Error</div>;
  }

  let totalScore = 100 * calculateScroe(scores);
  return (
    <div>
      {Comp}
      <pre>
        {JSON.stringify(
          {
            ARN,
            ...scores,
            totalScore
          },
          "\n",
          " "
        ).replace(/["{},]/g, "")}
      </pre>
    </div>
  );
};

function App() {
  return (
    <div className="relative bg-gray-100 h-screen w-screen">
      <div className="text-lg font-bold text-center"> HEADER POKE GAME </div>
      <div className="m-1 p-1 rounded bg-red-200">Name only</div>
      <Signature />
      <ARNtoSVG ARN="XVD" />
      <div className="bg-red-100">
        <div>
          <Icon path={mdiAccount} size={1} />
          <CirculingText text="Yes You get it" size={120} />
        </div>
        Nice We have something
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
