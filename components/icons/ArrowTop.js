import * as React from "react";

const SvgArrowTop = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#arrowTop_svg__a)">
      <path
        d="m15.75 9.122-5.198-5.269L5.35 9.118l-1.5-1.52 6.704-6.58 6.597 6.687-1.4 1.417Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="arrowTop_svg__a">
        <path
          fill="#fff"
          transform="rotate(-89.977 5.066 5.064)"
          d="M0 0h10.129v21H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgArrowTop;
