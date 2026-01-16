import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#MR_svg__a)">
      <path
        fill="#496E2D"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#FFDA44"
        d="M12 13.864a4.175 4.175 0 0 1-4.077-3.28 4.174 4.174 0 1 0 8.154 0A4.174 4.174 0 0 1 12 13.864"
      />
      <path
        fill="#FFDA44"
        d="m12 8.348.388 1.196h1.258l-1.018.739.389 1.195L12 10.74l-1.017.74.388-1.196-1.017-.74h1.257z"
      />
    </g>
    <defs>
      <clipPath id="MR_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMr;
