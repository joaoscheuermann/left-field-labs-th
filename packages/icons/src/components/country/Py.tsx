import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#PY_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#D80027"
        d="M12 0A12 12 0 0 0 1.19 6.783h21.62A12 12 0 0 0 12 0"
      />
      <path
        fill="#0052B4"
        d="M12 24a12 12 0 0 0 10.81-6.782H1.19A12 12 0 0 0 12 24.001"
      />
      <path
        fill="#6DA544"
        d="m14.951 8.527-1.107 1.106a2.609 2.609 0 1 1-3.69 0L9.05 8.527a4.174 4.174 0 1 0 5.903 0"
      />
      <path
        fill="#FFDA44"
        d="m12 9.913.389 1.195h1.257l-1.017.74.388 1.195L12 12.304l-1.017.739.388-1.196-1.017-.739h1.258z"
      />
    </g>
    <defs>
      <clipPath id="PY_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPy;
