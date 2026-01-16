import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#BM_svg__a)">
      <path
        fill="#D80027"
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12C0 12.003 12 .001 12 0c6.627 0 12 5.373 12 12"
      />
      <path
        fill="#0052B4"
        d="M12 5.739v4.047L7.826 5.74zM6.26 12h3.526L6.261 7.303l-.522 3.652z"
      />
      <path
        fill="#F0F0F0"
        d="M11.968 12.001H12v-.032zM11.999 6.261V.001h-.002C5.37 0-.001 5.373-.001 12h6.26V8.474l3.526 3.526h2.182l.032-.033V9.787L8.473 6.261z"
      />
      <path
        fill="#D80027"
        d="M6.07 1.565a12.06 12.06 0 0 0-4.505 4.506v6.451h3.13V4.696h7.826v-3.13z"
      />
      <path fill="#D80027" d="m12.476 11-4.74-4.74H6.26l6.216 6.216z" />
      <path
        fill="#F3F3F3"
        d="M13.565 6.26v5.739c0 2.795 7.304 2.795 7.304 0v-5.74z"
      />
      <path
        fill="#6DA544"
        d="M13.565 12c0 2.796 3.652 3.653 3.652 3.653S20.87 14.796 20.87 12z"
      />
      <path
        fill="#A2001D"
        d="m17.217 9.705-1.695.73V12l1.695 1.044L18.913 12v-1.565z"
      />
      <path fill="#338AF3" d="M18.913 8.869h-3.391v1.565h3.391z" />
    </g>
    <defs>
      <clipPath id="BM_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBm;
