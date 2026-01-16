import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCw = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#CW_svg__a)">
      <path
        fill="#FFDA44"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#0052B4"
        d="M12 24c3.937 0 7.432-1.896 9.62-4.825H2.38A11.98 11.98 0 0 0 12 24M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 1.419.247 2.78.7 4.044h22.6c.453-1.264.7-2.625.7-4.044"
      />
      <path
        fill="#F0F0F0"
        d="m8.214 7.696.647 1.993h2.096L9.26 10.92l.648 1.992-1.695-1.231-1.696 1.231.648-1.992L5.47 9.689h2.095zM4.615 5.61l.388 1.195h1.258l-1.017.74.388 1.195-1.017-.739-1.017.74.388-1.197-1.017-.739h1.258z"
      />
    </g>
    <defs>
      <clipPath id="CW_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCw;
