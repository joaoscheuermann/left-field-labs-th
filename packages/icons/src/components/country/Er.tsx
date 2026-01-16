import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ER_svg__a)">
      <path
        fill="#338AF3"
        d="M10.957 10.957s-7.435 9.53-7.442 9.528A11.96 11.96 0 0 0 12 24c6.628 0 12-5.373 12-12z"
      />
      <path
        fill="#6DA544"
        d="M10.957 12S3.522 3.512 3.515 3.513A11.96 11.96 0 0 1 12 0c6.628 0 12 5.372 12 12z"
      />
      <path
        fill="#D80027"
        d="M3.514 3.516c-4.686 4.686-4.686 12.284 0 16.97 0 .002 20.486-8.485 20.486-8.485z"
      />
      <path
        fill="#FFDA44"
        d="M6.26 7.043a4.18 4.18 0 0 0-4.173 4.174v1.565a4.18 4.18 0 0 0 4.174 4.174 4.18 4.18 0 0 0 4.174-4.174v-1.565A4.18 4.18 0 0 0 6.26 7.043m2.61 5.74a2.61 2.61 0 0 1-1.827 2.488v-1.706l1.108-1.108-1.107-1.106v-.917H5.477V12l-1.107 1.106 1.107 1.107v1.058a2.61 2.61 0 0 1-1.826-2.489v-1.565A2.61 2.61 0 0 1 6.26 8.608a2.61 2.61 0 0 1 2.608 2.609z"
      />
    </g>
    <defs>
      <clipPath id="ER_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEr;
