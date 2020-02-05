import React from "react";

import CirclePath from "./CirclePath";

/**
 * This is a SVG Component
 * for make circular Text
 */

const CirculingText = ({
  size,
  fontSize = 16,
  id,
  text,
  textRotation = 60,
  children,
  ...props
}) => {
  let svgSize = size - fontSize * 2;
  let pid = id + "CirclePath" + CirclePath.increment++;

  text = text ? text : (typeof props.children == 'string') ? props.children: null;

  return (
    <svg width={size} height={size} viewbox={`0 0 ${size} ${size}`}>
      <CirclePath
        id={pid}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={(size - fontSize) / 2}
      />
      
      <text
        width={size}
        fontSize={fontSize}
        transform={`rotate(${-textRotation})`}
        transform-origin="center"
      >
        <textPath xlinkHref={"#" + pid}>{text}</textPath>
      </text>
    </svg>
  );
};

export default CirculingText;
