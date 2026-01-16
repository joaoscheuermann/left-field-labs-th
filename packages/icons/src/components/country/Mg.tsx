import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#MG_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#6DA544"
        d="M7.826 12v11.253c1.3.482 2.706.746 4.174.746 6.627 0 12-5.372 12-12 0-6.627-16.174 0-16.174 0"
      />
      <path
        fill="#D80027"
        d="M12 0c-1.468 0-2.874.265-4.174.747V12H24c0-6.628-5.373-12-12-12"
      />
    </g>
    <defs>
      <clipPath id="MG_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMg;
