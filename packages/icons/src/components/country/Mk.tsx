import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#MK_svg__a)">
      <path
        fill="#FFDA44"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#D80027"
        d="M13.825 23.863a11.94 11.94 0 0 0 5.271-2.186L12 12.001zM10.175.138a11.94 11.94 0 0 0-5.271 2.185L12 12zM4.904 21.677a11.94 11.94 0 0 0 5.271 2.186L12 12z"
      />
      <path
        fill="#D80027"
        d="M2.323 4.902a11.94 11.94 0 0 0-2.185 5.272L12 11.999zM.138 13.825a11.94 11.94 0 0 0 2.185 5.272L12 12zM23.862 10.174a11.94 11.94 0 0 0-2.185-5.272L12 12zM19.096 2.323A11.94 11.94 0 0 0 13.825.138L12 12zM21.677 19.097a11.94 11.94 0 0 0 2.185-5.272L12 12.002z"
      />
      <path
        fill="#D80027"
        d="M12 16.174a4.174 4.174 0 1 0 0-8.347 4.174 4.174 0 0 0 0 8.347"
      />
      <path
        fill="#FFDA44"
        d="M12 15.13a3.13 3.13 0 1 0 0-6.261 3.13 3.13 0 0 0 0 6.26"
      />
    </g>
    <defs>
      <clipPath id="MK_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMk;
