import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAw = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#AW_svg__a)">
      <path
        fill="#FFDA44"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#338AF3"
        d="M12 24c3.637 0 6.896-1.618 9.096-4.174H2.903A11.97 11.97 0 0 0 12 24M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 1.083.144 2.132.413 3.13h23.174c.269-.998.413-2.047.413-3.13M.954 16.696q.347.817.807 1.566h20.477q.46-.75.808-1.566z"
      />
      <path
        fill="#F0F0F0"
        d="M5.499 7.57 3.155 6.533 5.499 5.5l1.035-2.345L7.568 5.5l2.345 1.034L7.568 7.57 6.534 9.914z"
      />
      <path
        fill="#D80027"
        d="m6.534 4.447.639 1.448 1.448.64-1.448.638-.64 1.448-.638-1.448-1.448-.639 1.448-.639z"
      />
    </g>
    <defs>
      <clipPath id="AW_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAw;
