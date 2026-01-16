import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAz = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#AZ_svg__a)">
      <path
        fill="#D80027"
        d="M24 12c0-1.468-.265-2.874-.747-4.174L12 7.304.745 7.826A12 12 0 0 0 0 12c0 1.468.264 2.874.746 4.174L12 16.696l11.253-.522c.482-1.3.747-2.706.747-4.174"
      />
      <path
        fill="#6DA544"
        d="M12 24c5.16 0 9.558-3.257 11.254-7.827H.747C2.442 20.743 6.84 24 12 24"
      />
      <path
        fill="#338AF3"
        d="M.747 7.825h22.507C21.558 3.255 17.16 0 12 0S2.442 3.256.747 7.825"
      />
      <path
        fill="#F0F0F0"
        d="M12.26 15.391a3.391 3.391 0 1 1 1.614-6.375 4.174 4.174 0 1 0 0 5.967c-.48.26-1.03.408-1.613.408"
      />
      <path
        fill="#F0F0F0"
        d="m14.87 9.65.449 1.264 1.21-.575-.575 1.21 1.263.45-1.263.449.575 1.21-1.21-.575-.45 1.264-.449-1.264-1.21.576.575-1.211-1.264-.45 1.264-.448-.576-1.212 1.211.576z"
      />
    </g>
    <defs>
      <clipPath id="AZ_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAz;
