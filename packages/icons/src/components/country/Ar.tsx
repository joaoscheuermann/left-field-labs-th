import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#AR_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#338AF3"
        d="M12-.001A12 12 0 0 0 1.19 6.782h21.62A12 12 0 0 0 12-.001M12 23.999a12 12 0 0 0 10.81-6.783H1.19A12 12 0 0 0 12.001 24"
      />
      <path
        fill="#FFDA44"
        d="m15.587 12-1.466.69.78 1.419-1.59-.305-.203 1.608L12 14.229l-1.108 1.183-.202-1.608-1.592.305.78-1.42L8.414 12l1.466-.69-.78-1.419 1.59.305.203-1.608L12 9.771l1.108-1.183.202 1.608 1.592-.305-.78 1.42z"
      />
    </g>
    <defs>
      <clipPath id="AR_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAr;
