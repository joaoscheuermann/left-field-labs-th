import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#GA_svg__a)">
      <path
        fill="#FFDA44"
        d="M23.253 16.175c.482-1.3.747-2.706.747-4.174s-.265-2.874-.747-4.174L12 6.784.745 7.827A12 12 0 0 0 0 12.001c0 1.468.264 2.874.746 4.174L12 17.218z"
      />
      <path
        fill="#0052B4"
        d="M12 24c5.16 0 9.559-3.257 11.254-7.827H.747C2.442 20.743 6.84 24 12 24"
      />
      <path
        fill="#6DA544"
        d="M12 .001C6.84.001 2.443 3.257.748 7.827h22.507C21.56 3.257 17.16.001 12.001.001"
      />
    </g>
    <defs>
      <clipPath id="GA_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGa;
