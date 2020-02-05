import React from "react";

const CirclePath = ({ r, cx, cy, ...props }) => (
  <path
    d={`M ${cx - r}, ${cy} a ${r},${r} 0 1,0 ${2 * r},0 a ${r},${r} 0 1,0 ${-2 *
      r},0`}
    {...props}
  />
);

// set init increments
CirclePath.increment = 0;

export default CirclePath;