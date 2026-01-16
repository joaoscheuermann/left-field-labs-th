import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDz = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#DZ_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 0c6.628 0 12 5.373 12 12s-5.372 12-12 12c0-.522-1.565-12-1.565-12z"
      />
      <path fill="#496E2D" d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0" />
      <path
        fill="#D80027"
        d="m14.578 9.699-.985 1.357L12 10.538l.986 1.356L12 13.251l1.593-.52.987 1.357-.002-1.677 1.595-.519-1.595-.517z"
      />
      <path
        fill="#D80027"
        d="M12.995 15.392a3.391 3.391 0 1 1 1.613-6.375 4.174 4.174 0 1 0 0 5.967c-.48.26-1.029.408-1.613.408"
      />
    </g>
    <defs>
      <clipPath id="DZ_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDz;
