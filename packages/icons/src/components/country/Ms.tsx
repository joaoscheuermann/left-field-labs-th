import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#MS_svg__a)">
      <path
        fill="#0052B4"
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12C0 12.003 12 .001 12 0c6.627 0 12 5.373 12 12"
      />
      <path fill="#F0F0F0" d="M11.969 12H12v-.032z" />
      <path
        fill="#F0F0F0"
        d="M12 6.261V.001h-.002C5.373 0 0 5.373 0 12h6.261V8.474l3.526 3.526h2.181l.033-.033V9.787L8.475 6.261z"
      />
      <path
        fill="#D80027"
        d="M6.071 1.565a12.06 12.06 0 0 0-4.506 4.506v5.93h3.13V4.695H12v-3.13z"
      />
      <path fill="#D80027" d="M12 10.524 7.737 6.261H6.26L12.001 12z" />
      <path
        fill="#338AF3"
        d="M13.565 6.26V12c0 2.795 3.652 3.652 3.652 3.652S20.87 14.795 20.87 12V6.26z"
      />
      <path
        fill="#A2001D"
        d="M13.565 12c0 2.795 3.652 3.652 3.652 3.652s3.652-.857 3.652-3.653z"
      />
      <path
        fill="#000"
        d="M18.782 8.87H17.74V7.825h-1.044v1.043h-1.043v1.044h1.043v3.13h1.044v-3.13h1.043z"
      />
    </g>
    <defs>
      <clipPath id="MS_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMs;
