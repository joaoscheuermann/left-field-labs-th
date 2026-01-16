import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#PK_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#F0F0F0"
        d="M0 12c0 4.549 2.531 8.506 6.261 10.541V1.46A12 12 0 0 0 .001 12"
      />
      <path
        fill="#496E2D"
        d="M12 0C9.92 0 7.965.53 6.26 1.46v21.082C7.966 23.472 9.92 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12"
      />
      <path
        fill="#F0F0F0"
        d="M17.13 13.986a3.391 3.391 0 1 1-2.425-6.112A4.174 4.174 0 1 0 18.2 12.71a3.4 3.4 0 0 1-1.07 1.275M17.066 7.827l.855.922 1.141-.529-.612 1.098.855.922-1.234-.243-.612 1.098-.15-1.248-1.234-.243 1.141-.529z"
      />
    </g>
    <defs>
      <clipPath id="PK_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPk;
