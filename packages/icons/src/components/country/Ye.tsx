import * as React from 'react';
import type { SVGProps } from 'react';
const SvgYe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#YE_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#000"
        d="M12 23.999c5.16 0 9.558-3.256 11.254-7.826H.746C2.442 20.743 6.84 23.999 12 23.999"
      />
      <path
        fill="#D80027"
        d="M12 0C6.84 0 2.442 3.257.746 7.827h22.508C21.558 3.257 17.16 0 12 0"
      />
    </g>
    <defs>
      <clipPath id="YE_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgYe;
