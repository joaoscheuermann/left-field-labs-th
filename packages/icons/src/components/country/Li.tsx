import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#LI_svg__a)">
      <path
        fill="#D80027"
        d="M24 12c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12 .522 0 12-1.566 12-1.566z"
      />
      <path fill="#0052B4" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12" />
      <path
        fill="#FFDA44"
        d="M8.87 8.347a1.565 1.565 0 0 0-2.609-1.166v-.92h.522V5.217h-.522v-.522H5.218v.522h-.522v1.044h.522v.92A1.565 1.565 0 0 0 3.13 9.514v.92h5.217v-.92c.32-.287.522-.703.522-1.167"
      />
    </g>
    <defs>
      <clipPath id="LI_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLi;
