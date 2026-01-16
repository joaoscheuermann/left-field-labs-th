import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#NU_svg__a)">
      <path
        fill="#FFDA44"
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12C0 12.003 12 .001 12 0c6.627 0 12 5.373 12 12"
      />
      <path
        fill="#0052B4"
        d="M12 5.74v4.047L7.826 5.74zM6.261 12h3.526L6.26 7.305l-.522 3.652z"
      />
      <path fill="#F0F0F0" d="M11.968 12H12v-.032z" />
      <path
        fill="#F0F0F0"
        d="M12 6.26V0h-.002C5.371.001 0 5.373 0 12h6.26V8.474L9.787 12h2.182l.032-.032V9.786L8.474 6.261z"
      />
      <path fill="#D80027" d="M12 10.525 7.735 6.26H6.26l5.74 5.74z" />
      <path
        fill="#D80027"
        d="M6.07 1.565q-.693.396-1.327.877h.493l-1.302.946.497 1.53-1.301-.946-.139.101c-.54.614-1.019 1.283-1.426 1.998V12h3.13V4.695H12v-3.13z"
      />
      <path
        fill="#0052B4"
        d="M5.126 2.164q-.194.135-.383.28l-.809.945-.804.584-.14.102q-.441.503-.827 1.052a2.217 2.217 0 0 0 2.963-2.963"
      />
      <path
        fill="#FFDA44"
        d="m2.99 4.074.14-.102 1.301.946-.497-1.53 1.301-.946h-.492A12 12 0 0 0 2.99 4.074M8.294 2.087l.26.798h.837l-.678.492.26.797-.679-.492-.678.492.26-.797-.679-.492h.838zM3.13 7.305l.26.797h.837l-.678.493.26.797L3.13 8.9l-.678.493.259-.797-.678-.493h.838z"
      />
    </g>
    <defs>
      <clipPath id="NU_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNu;
