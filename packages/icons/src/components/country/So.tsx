import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#SO_svg__a)">
      <path
        fill="#338AF3"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#F0F0F0"
        d="m12 6.26 1.295 3.986h4.191l-3.39 2.464 1.294 3.985L12 14.232l-3.39 2.464 1.295-3.986-3.39-2.464h4.19z"
      />
    </g>
    <defs>
      <clipPath id="SO_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSo;
