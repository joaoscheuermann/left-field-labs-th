import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#VC_svg__a)">
      <path
        fill="#FFDA44"
        d="M17.739 1.46A11.95 11.95 0 0 0 11.999 0C9.922 0 7.967.53 6.262 1.46L5.217 12l1.044 10.541c1.705.93 3.66 1.46 5.739 1.46s4.034-.53 5.739-1.46l1.043-10.54z"
      />
      <path
        fill="#338AF3"
        d="M6.261 22.54V1.46A12 12 0 0 0 .001 12c0 4.549 2.53 8.506 6.26 10.54"
      />
      <path
        fill="#6DA544"
        d="M24 12c0-4.549-2.53-8.506-6.26-10.541v21.082A12 12 0 0 0 24 12M9.392 15.13 7.305 12l2.087-3.131 2.087 3.13zM14.61 15.13 12.523 12l2.087-3.131 2.087 3.13zM12 19.303l-2.086-3.13L12 13.043l2.087 3.13z"
      />
    </g>
    <defs>
      <clipPath id="VC_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVc;
