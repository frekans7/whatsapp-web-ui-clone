import * as React from "react";

const SvgArrowDown = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#arrowDown_svg__a)">
      <path
        d="m15.75 1.015-5.198 5.269L5.35 1.019l-1.5 1.52 6.704 6.581 6.597-6.688-1.4-1.417Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="arrowDown_svg__a">
        <path
          fill="#fff"
          transform="matrix(.0004 1 1 -.0004 0 .008)"
          d="M0 0h10.129v21H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgArrowDown;
