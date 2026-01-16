import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#CO_svg__a)">
      <path
        fill="#FFDA44"
        d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12l-12 1.043z"
      />
      <path
        fill="#D80027"
        d="M1.606 18C3.681 21.587 7.559 24 12 24c4.442 0 8.32-2.413 10.395-6L12 17.218z"
      />
      <path
        fill="#0052B4"
        d="M22.394 18A11.95 11.95 0 0 0 24 12H0c0 2.186.584 4.235 1.605 6z"
      />
    </g>
    <defs>
      <clipPath id="CO_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCo;
