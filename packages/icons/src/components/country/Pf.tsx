import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#PF_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#D80027"
        d="M1.459 6.262h21.082A12 12 0 0 0 12 0c-4.549 0-8.506 2.53-10.541 6.26M12 24c4.548 0 8.505-2.53 10.54-6.26H1.46A12 12 0 0 0 11.999 24"
      />
      <path
        fill="#FFDA44"
        d="M16.174 12c0 2.305-1.869 3.652-4.174 3.652S7.826 14.305 7.826 12a4.174 4.174 0 1 1 8.348 0"
      />
      <path fill="#0052B4" d="M16.174 12a4.174 4.174 0 0 1-8.348 0" />
      <path
        fill="#D80027"
        d="M10.435 10.956H9.392v2.087h1.043zM14.609 10.956h-1.044v2.087h1.044zM12.522 9.391h-1.043v3.652h1.043z"
      />
    </g>
    <defs>
      <clipPath id="PF_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPf;
