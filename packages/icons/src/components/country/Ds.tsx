import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#DS_svg__a)">
      <path
        fill="#F0F0F0"
        d="M1.191 6.783A11.95 11.95 0 0 0 .001 12c0 1.87.427 3.64 1.19 5.218l10.81 1.043 10.809-1.043A11.95 11.95 0 0 0 24 12c0-1.87-.427-3.64-1.19-5.217L12 5.739z"
      />
      <path
        fill="#000"
        d="M1.19 17.217A12 12 0 0 0 12 23.999a12 12 0 0 0 10.809-6.782z"
      />
      <path
        fill="#D80027"
        d="M1.19 6.783H22.81A12 12 0 0 0 11.999 0 12 12 0 0 0 1.192 6.783"
      />
      <path
        fill="#496E2D"
        d="M3.515 3.514C-1.17 8.2-1.17 15.8 3.515 20.484c1.937-1.936 3.8-3.798 8.486-8.485z"
      />
    </g>
    <defs>
      <clipPath id="DS_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDs;
