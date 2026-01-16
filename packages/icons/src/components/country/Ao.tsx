import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#AO_svg__a)">
      <path
        fill="#D80027"
        d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12c-.522 0-12 1.565-12 1.565z"
      />
      <path
        fill="#000"
        d="M24 12c0 6.628-5.373 12-12 12-6.628 0-12-5.372-12-12"
      />
      <path
        fill="#FFDA44"
        d="m10.354 9.544 1.017.738-.387 1.196 1.016-.74 1.018.738-.39-1.195 1.017-.74-1.257.001-.39-1.195-.387 1.196z"
      />
      <path
        fill="#FFDA44"
        d="M15 6.803a5.96 5.96 0 0 0-3-.802v1.565a4.4 4.4 0 0 1 2.217.593 4.44 4.44 0 0 1 1.623 6.058 4.44 4.44 0 0 1-6.058 1.623A4.4 4.4 0 0 1 8.3 14.442l-1.307.863A5.96 5.96 0 0 0 9 17.195 6.007 6.007 0 0 0 17.196 15 6.007 6.007 0 0 0 15 6.804"
      />
      <path
        fill="#FFDA44"
        d="M8.54 10.956a1.565 1.565 0 0 0 .622 2.124l5.083 2.778c-.346.632-.162 1.401.47 1.747l1.373.751a1.304 1.304 0 0 0 1.77-.518l.752-1.373z"
      />
    </g>
    <defs>
      <clipPath id="AO_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAo;
