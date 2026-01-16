import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKw = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#KW_svg__a)">
      <path
        fill="#F0F0F0"
        d="M23.254 16.173c.482-1.3.746-2.706.746-4.174s-.264-2.874-.746-4.174L12.001 6.782.747 7.825A12 12 0 0 0 0 12c0 1.468.265 2.874.747 4.174L12 17.217z"
      />
      <path
        fill="#D80027"
        d="M12 24c5.16 0 9.558-3.257 11.254-7.827H.747C2.442 20.743 6.84 24 12 24"
      />
      <path
        fill="#6DA544"
        d="M12 0C6.84 0 2.442 3.256.747 7.826h22.507C21.558 3.256 17.16 0 12 0"
      />
      <path
        fill="#000"
        d="M3.515 3.514c-4.686 4.687-4.686 12.285 0 16.971l4.312-4.311V7.826z"
      />
    </g>
    <defs>
      <clipPath id="KW_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKw;
