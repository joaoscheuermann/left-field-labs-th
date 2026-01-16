import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#TH_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#0052B4"
        d="M23.254 7.826H.747A12 12 0 0 0 0 12c0 1.468.264 2.874.747 4.174h22.507c.482-1.3.746-2.706.746-4.174s-.264-2.874-.746-4.174"
      />
      <path
        fill="#D80027"
        d="M12.001 0a11.97 11.97 0 0 0-9.096 4.173h18.193A11.97 11.97 0 0 0 12.001 0M21.097 19.826H2.904A11.97 11.97 0 0 0 12 24c3.637 0 6.896-1.618 9.097-4.174"
      />
    </g>
    <defs>
      <clipPath id="TH_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTh;
