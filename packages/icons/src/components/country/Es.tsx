import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ES_svg__a)">
      <path
        fill="#FFDA44"
        d="M0 12c0 1.467.264 2.873.746 4.173L12 17.217l11.254-1.044c.482-1.3.746-2.706.746-4.174s-.264-2.874-.746-4.174L12 6.782.746 7.825A12 12 0 0 0 0 12"
      />
      <path
        fill="#D80027"
        d="M23.255 7.826C21.56 3.256 17.161 0 12.001 0S2.443 3.256.748 7.826zM.747 16.174C2.442 20.744 6.84 24 12 24c5.16 0 9.558-3.257 11.254-7.826z"
      />
    </g>
    <defs>
      <clipPath id="ES_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEs;
