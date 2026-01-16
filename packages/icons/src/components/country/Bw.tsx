import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBw = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#BW_svg__a)">
      <path
        fill="#F0F0F0"
        d="M.567 8.348A12 12 0 0 0 0 12c0 1.273.2 2.5.567 3.652l11.434.522 11.433-.522C23.8 14.5 24 13.273 24 12s-.199-2.5-.566-3.652L12 7.826z"
      />
      <path
        fill="#000"
        d="M24 12c0-.711-.062-1.409-.181-2.086H.182a12 12 0 0 0 0 4.174h23.637q.18-1.019.181-2.087"
      />
      <path
        fill="#338AF3"
        d="M12 24c5.354 0 9.888-3.507 11.433-8.348H.566C2.112 20.493 6.646 23.999 12 24M12 0C6.646 0 2.112 3.505.567 8.346h22.867C21.888 3.506 17.354-.001 12-.001"
      />
    </g>
    <defs>
      <clipPath id="BW_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBw;
