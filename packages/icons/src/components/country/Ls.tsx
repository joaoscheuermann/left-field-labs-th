import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#LS_svg__a)">
      <path
        fill="#F0F0F0"
        d="M0 12c0 1.87.428 3.64 1.19 5.217L12 17.74l10.81-.522A11.95 11.95 0 0 0 24 12c0-1.87-.428-3.64-1.19-5.217L12 6.26l-10.81.521A11.95 11.95 0 0 0 0 12"
      />
      <path
        fill="#6DA544"
        d="M12 24a12 12 0 0 0 10.81-6.782H1.19A12 12 0 0 0 12.001 24"
      />
      <path
        fill="#0052B4"
        d="M12 0A12 12 0 0 0 1.191 6.781H22.81A12 12 0 0 0 12-.001"
      />
      <path
        fill="#000"
        d="M12.783 11.74V8.87h-1.565v2.87l-1.89 1.89c.55.9 1.54 1.5 2.673 1.5 1.131 0 2.123-.6 2.673-1.5z"
      />
    </g>
    <defs>
      <clipPath id="LS_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLs;
