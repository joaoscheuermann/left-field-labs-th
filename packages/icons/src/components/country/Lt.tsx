import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#LT_svg__a)">
      <path
        fill="#6DA544"
        d="M23.254 16.174c.482-1.3.746-2.706.746-4.173s-.264-2.874-.746-4.174L12 6.783.747 7.827A12 12 0 0 0 0 12c0 1.467.264 2.874.747 4.173L12 17.219z"
      />
      <path
        fill="#FFDA44"
        d="M23.254 7.826C21.558 3.256 17.16 0 12 0S2.442 3.256.747 7.826z"
      />
      <path
        fill="#D80027"
        d="M12 24c5.16 0 9.558-3.256 11.254-7.825H.747C2.442 20.745 6.84 24 12 24"
      />
    </g>
    <defs>
      <clipPath id="LT_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLt;
