import * as React from 'react';
import type { SVGProps } from 'react';
const SvgJo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#JO_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#000"
        d="M7.304 7.826h15.95C21.558 3.256 17.16 0 12 0a11.96 11.96 0 0 0-8.485 3.515z"
      />
      <path
        fill="#6DA544"
        d="M7.304 16.175h15.95C21.558 20.745 17.16 24 12 24a11.96 11.96 0 0 1-8.485-3.515z"
      />
      <path
        fill="#D80027"
        d="M3.515 3.514c-4.687 4.686-4.687 12.284 0 16.97L12 12z"
      />
      <path
        fill="#F0F0F0"
        d="m4.763 9.392.658 1.377 1.488-.344-.666 1.374 1.196.948-1.49.336.005 1.526-1.191-.955-1.19.955.003-1.526-1.489-.336 1.196-.948-.666-1.374 1.487.344z"
      />
    </g>
    <defs>
      <clipPath id="JO_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgJo;
