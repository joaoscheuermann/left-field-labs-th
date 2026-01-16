import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#MD_svg__a)">
      <path
        fill="#FFDA44"
        d="M17.217 1.191A11.95 11.95 0 0 0 12 .001c-1.87 0-3.64.427-5.218 1.19L5.74 12.001 6.782 22.81A11.95 11.95 0 0 0 12 24c1.87 0 3.64-.427 5.217-1.19L18.261 12z"
      />
      <path
        fill="#0052B4"
        d="M6.783 1.192A12 12 0 0 0 0 12.001 12 12 0 0 0 6.783 22.81z"
      />
      <path
        fill="#D80027"
        d="M17.217 1.192V22.81A12 12 0 0 0 24 12a12 12 0 0 0-6.783-10.809"
      />
      <path
        fill="#FF9811"
        d="M16.174 9.442h-2.87a1.304 1.304 0 0 0-2.609 0h-2.87c0 .71.619 1.284 1.328 1.284H9.11c0 .71.575 1.285 1.284 1.285 0 .628.451 1.15 1.047 1.261l-1.012 2.285a4.16 4.16 0 0 0 3.141 0l-1.012-2.285a1.284 1.284 0 0 0 1.047-1.261c.71 0 1.284-.575 1.284-1.284h-.043c.71 0 1.328-.575 1.328-1.285"
      />
      <path
        fill="#0052B4"
        d="M12 11.218 10.304 12v1.566L12 14.609l1.696-1.043V12z"
      />
      <path fill="#D80027" d="M13.696 10.434h-3.392V12h3.392z" />
    </g>
    <defs>
      <clipPath id="MD_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMd;
