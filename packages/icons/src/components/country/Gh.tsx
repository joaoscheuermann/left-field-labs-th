import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#GH_svg__a)">
      <path
        fill="#FFDA44"
        d="M0 12c0 1.467.264 2.873.746 4.173L12 16.695l11.254-.522c.482-1.3.746-2.706.746-4.174s-.264-2.874-.746-4.174L12 7.303.746 7.825A12 12 0 0 0 0 12"
      />
      <path
        fill="#D80027"
        d="M12-.001C6.84-.001 2.442 3.256.746 7.825h22.507C21.558 3.255 17.16 0 12 0"
      />
      <path
        fill="#496E2D"
        d="M23.254 16.174H.746C2.442 20.744 6.84 24 12 24s9.558-3.256 11.254-7.826"
      />
      <path
        fill="#000"
        d="m12 7.826 1.036 3.189h3.353l-2.713 1.97 1.036 3.189L12 14.204l-2.713 1.97 1.036-3.189-2.712-1.97h3.353z"
      />
    </g>
    <defs>
      <clipPath id="GH_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGh;
