import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#EE_svg__a)">
      <path
        fill="#000"
        d="M0 12c0 1.467.264 2.873.746 4.173L12 16.695l11.253-.522c.483-1.3.747-2.706.747-4.174s-.264-2.874-.747-4.174L12 7.304.746 7.825A12 12 0 0 0 0 12"
      />
      <path
        fill="#0052B4"
        d="M12 0C6.84 0 2.442 3.256.746 7.826h22.507C21.558 3.256 17.16 0 12 0"
      />
      <path
        fill="#F0F0F0"
        d="M23.253 16.174H.746C2.442 20.744 6.84 24 12 24s9.558-3.256 11.253-7.826"
      />
    </g>
    <defs>
      <clipPath id="EE_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEe;
