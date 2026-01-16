import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSl = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#SL_svg__a)">
      <path
        fill="#F0F0F0"
        d="M23.253 16.174c.483-1.3.747-2.706.747-4.174 0-1.467-.264-2.874-.747-4.174L12 6.783.746 7.826A12 12 0 0 0 0 12c0 1.468.264 2.874.746 4.174L12 17.218z"
      />
      <path
        fill="#338AF3"
        d="M12 24c5.16 0 9.558-3.256 11.253-7.825H.746C2.442 20.745 6.84 24 12 24"
      />
      <path
        fill="#6DA544"
        d="M12 0C6.84 0 2.442 3.257.746 7.826h22.508C21.558 3.256 17.16 0 12 0"
      />
    </g>
    <defs>
      <clipPath id="SL_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSl;
