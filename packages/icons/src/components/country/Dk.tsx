import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#DK_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#D80027"
        d="M9.392 10.435H23.9C23.132 4.547 18.098 0 12.001 0c-.896 0-1.769.1-2.609.285zM6.262 10.436V1.46a12 12 0 0 0-6.16 8.976zM6.261 13.566H.101a12 12 0 0 0 6.16 8.975zM9.392 13.566v10.15c.84.185 1.713.284 2.609.284 6.097 0 11.131-4.547 11.898-10.434z"
      />
    </g>
    <defs>
      <clipPath id="DK_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDk;
