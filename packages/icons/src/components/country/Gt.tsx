import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#GT_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#338AF3"
        d="M23.999 12a12 12 0 0 0-6.783-10.809V22.81A12 12 0 0 0 24 12M0 12a12 12 0 0 0 6.782 10.81V1.19A12 12 0 0 0 0 12"
      />
      <path
        fill="#ACABB1"
        d="m15.136 14.029-2.03-2.03 1.932-1.931-.088-1.02-.553-.553L12 10.893 9.602 8.495l-.553.553-.088 1.02 1.932 1.931-2.03 2.03 1.108 1.106L12 13.106l2.029 2.03z"
      />
      <path
        fill="#6DA544"
        d="m14.952 9.05-1.107 1.106a2.609 2.609 0 1 1-3.69 0L9.05 9.049a4.174 4.174 0 1 0 5.903 0"
      />
    </g>
    <defs>
      <clipPath id="GT_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGt;
