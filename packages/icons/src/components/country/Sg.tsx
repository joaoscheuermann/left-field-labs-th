import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#SG_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path fill="#D80027" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12" />
      <path
        fill="#F0F0F0"
        d="M7.304 6.261a3.65 3.65 0 0 1 2.87-3.567 3.652 3.652 0 1 0 0 7.135 3.65 3.65 0 0 1-2.87-3.568M12 2.87l.259.797h.838l-.678.493.259.797L12 4.464l-.678.493.259-.797-.678-.493h.838z"
      />
      <path
        fill="#F0F0F0"
        d="m9.967 4.435.259.797h.838l-.678.493.259.797-.678-.493-.679.493.26-.797-.679-.493h.839zM14.033 4.435l.259.797h.838l-.678.493.26.797-.679-.493-.678.493.259-.797-.678-.493h.838zM13.25 6.783l.26.798h.838l-.678.492.259.797-.678-.492-.678.492.259-.797-.678-.492h.838zM10.75 6.783l.258.798h.838l-.678.492.26.797-.679-.492-.678.492.259-.797-.678-.492h.838z"
      />
    </g>
    <defs>
      <clipPath id="SG_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSg;
