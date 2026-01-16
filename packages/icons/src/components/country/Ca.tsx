import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#CA_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#D80027"
        d="M24 12.001a12 12 0 0 0-6.782-10.81v21.62A12 12 0 0 0 24.001 12M0 12a12 12 0 0 0 6.783 10.81V1.19A12 12 0 0 0 0 12.001M14.088 13.566l2.086-1.043L15.131 12v-1.043L13.044 12l1.043-2.087h-1.043L12.001 8.35l-1.044 1.565H9.914l1.043 2.087-2.087-1.043V12l-1.043.522 2.087 1.043-.522 1.044h2.087v1.565h1.043V14.61h2.087z"
      />
    </g>
    <defs>
      <clipPath id="CA_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCa;
