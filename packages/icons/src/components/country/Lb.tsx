import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#LB_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#D80027"
        d="M12 0A12 12 0 0 0 1.19 6.781h21.62A12 12 0 0 0 12-.001M12 24a12 12 0 0 0 10.81-6.783H1.19a12 12 0 0 0 10.81 6.782"
      />
      <path
        fill="#6DA544"
        d="M15.13 14.086 12 8.347l-3.13 5.74h2.348v1.565h1.565v-1.566z"
      />
    </g>
    <defs>
      <clipPath id="LB_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLb;
