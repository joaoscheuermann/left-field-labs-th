import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#FI_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#0052B4"
        d="M23.899 10.435H9.392V.285c-1.11.246-2.16.645-3.13 1.174v8.976H.101a12 12 0 0 0 0 3.13h6.16v8.976c.97.53 2.02.928 3.13 1.174v-10.15h14.507a12.1 12.1 0 0 0 0-3.13"
      />
    </g>
    <defs>
      <clipPath id="FI_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFi;
