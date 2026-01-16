import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#AE_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#000"
        d="m6.783 16.173 1.043 7.08c1.3.482 2.706.746 4.174.746 5.16 0 9.558-3.256 11.254-7.826z"
      />
      <path
        fill="#6DA544"
        d="M6.783 7.827 7.826.747C9.126.264 10.532 0 12 0c5.16 0 9.558 3.257 11.254 7.827z"
      />
      <path
        fill="#A2001D"
        d="M0 12c0 5.16 3.257 9.558 7.827 11.254V.747C3.257 2.442 0 6.84 0 12"
      />
    </g>
    <defs>
      <clipPath id="AE_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAe;
