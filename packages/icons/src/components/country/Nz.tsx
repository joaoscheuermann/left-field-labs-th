import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNz = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#NZ_svg__a)">
      <path
        fill="#0052B4"
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12C0 12.003 12 .001 12 0c6.627 0 12 5.373 12 12"
      />
      <path
        fill="#F0F0F0"
        d="M11.968 12H12v-.031zM12 6.261V.001h-.002C5.372 0 0 5.373 0 12h6.261V8.474l3.526 3.526h2.181l.032-.033V9.787L8.475 6.261z"
      />
      <path
        fill="#D80027"
        d="M6.071 1.565A12.06 12.06 0 0 0 1.565 6.07V12h3.13V4.695H12v-3.13z"
      />
      <path
        fill="#D80027"
        d="M12 10.525 7.738 6.26H6.261l5.74 5.74zM20.781 8.905l.26.797h.837l-.678.493.26.797-.679-.493-.678.493.259-.797-.678-.493h.838zM17.785 14.644l.389 1.195h1.257l-1.018.74.39 1.195-1.018-.739-1.017.739.388-1.196-1.017-.739h1.257zM17.899 5.252l.323.996h1.048l-.848.616.324.997-.848-.616-.847.616.324-.997-.848-.616h1.048zM15.015 8.87l.389 1.196h1.257l-1.017.739.389 1.196-1.018-.74-1.017.74.389-1.196-1.017-.74h1.257z"
      />
    </g>
    <defs>
      <clipPath id="NZ_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNz;
