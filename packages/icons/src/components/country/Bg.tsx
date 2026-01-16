import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#BG_svg__a)">
      <path
        fill="#496E2D"
        d="M24 12c0-1.467-.264-2.873-.746-4.173L12 7.305.746 7.827A12 12 0 0 0 0 12c0 1.467.264 2.874.746 4.173L12 16.696l11.254-.522c.482-1.3.746-2.706.746-4.173"
      />
      <path
        fill="#D80027"
        d="M12 24c5.16 0 9.558-3.257 11.254-7.826H.746C2.442 20.744 6.84 24 12 24"
      />
      <path
        fill="#F0F0F0"
        d="M.746 7.825h22.508C21.558 3.255 17.16 0 12 0S2.442 3.256.746 7.825"
      />
    </g>
    <defs>
      <clipPath id="BG_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBg;
