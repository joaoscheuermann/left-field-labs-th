import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#HU_svg__a)">
      <path
        fill="#F0F0F0"
        d="M.746 7.825A12 12 0 0 0 0 12c0 1.468.264 2.874.746 4.174L12 17.217l11.253-1.044c.482-1.3.747-2.706.747-4.174s-.265-2.874-.747-4.174L12 6.782z"
      />
      <path
        fill="#D80027"
        d="M12-.001C6.84-.001 2.442 3.256.747 7.825h22.507C21.558 3.255 17.16 0 12 0"
      />
      <path
        fill="#6DA544"
        d="M12 24c5.16 0 9.558-3.257 11.254-7.827H.747C2.442 20.743 6.84 24 12 24"
      />
    </g>
    <defs>
      <clipPath id="HU_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHu;
