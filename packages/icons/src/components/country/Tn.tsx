import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#TN_svg__a)">
      <path
        fill="#D80027"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#F0F0F0"
        d="M12 17.739A5.74 5.74 0 1 0 12 6.26a5.74 5.74 0 0 0 0 11.478"
      />
      <path
        fill="#D80027"
        d="m12.707 9.805.984 1.357 1.595-.517L14.3 12l.984 1.357-1.594-.519-.986 1.356v-1.677l-1.593-.519 1.594-.517z"
      />
      <path
        fill="#D80027"
        d="M13.304 15.39a3.391 3.391 0 1 1 1.613-6.375 4.174 4.174 0 1 0 0 5.967c-.48.26-1.03.408-1.613.408"
      />
    </g>
    <defs>
      <clipPath id="TN_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTn;
