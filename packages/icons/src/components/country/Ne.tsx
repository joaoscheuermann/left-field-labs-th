import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#NE_svg__a)">
      <path
        fill="#F0F0F0"
        d="M1.19 6.782A11.95 11.95 0 0 0 0 12c0 1.87.427 3.64 1.19 5.217L12 18.261l10.809-1.044A11.95 11.95 0 0 0 23.999 12c0-1.87-.427-3.64-1.19-5.218L11.999 5.74z"
      />
      <path
        fill="#6DA544"
        d="M1.19 17.218A12 12 0 0 0 12 24.001a12 12 0 0 0 10.809-6.783z"
      />
      <path
        fill="#FF9811"
        d="M1.19 6.782H22.81A12 12 0 0 0 11.999 0 12 12 0 0 0 1.192 6.782M12 16.174a4.174 4.174 0 1 0 0-8.348 4.174 4.174 0 0 0 0 8.348"
      />
    </g>
    <defs>
      <clipPath id="NE_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNe;
