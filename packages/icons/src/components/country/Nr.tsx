import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#NR_svg__a)">
      <path
        fill="#0052B4"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#FFDA44"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#0052B4"
        d="M12 0C5.726 0 .577 4.817.048 10.956h23.908C23.426 4.817 18.277 0 12.001 0M12 24c6.276 0 11.425-4.818 11.954-10.956H.046C.575 19.182 5.724 24 12 24"
      />
      <path
        fill="#F0F0F0"
        d="m9.913 16.174-1.345.633.716 1.302-1.46-.28-.185 1.476-1.017-1.085-1.017 1.085-.185-1.475-1.46.28.716-1.303-1.344-.633 1.344-.632-.716-1.302 1.46.279.185-1.475 1.017 1.085 1.017-1.085.185 1.475 1.46-.28-.715 1.303z"
      />
    </g>
    <defs>
      <clipPath id="NR_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNr;
