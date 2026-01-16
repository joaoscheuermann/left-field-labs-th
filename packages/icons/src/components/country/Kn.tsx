import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#KN_svg__a)">
      <path
        fill="#FFDA44"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#000"
        d="M3.515 20.485q.756.754 1.604 1.348L21.833 5.118a12 12 0 0 0-2.951-2.951L2.166 18.881q.594.847 1.348 1.604"
      />
      <path
        fill="#6DA544"
        d="M3.514 3.515C-.272 7.3-.998 12.986 1.333 17.502L17.502 1.333C12.986-.997 7.3-.271 3.514 3.515"
      />
      <path
        fill="#D80027"
        d="M20.485 20.485c3.786-3.786 4.513-9.471 2.182-13.987L6.497 22.667c4.517 2.33 10.203 1.604 13.988-2.182"
      />
      <path
        fill="#F0F0F0"
        d="m7.63 14.158 1.12.57.889-.888-.197 1.242 1.12.57-1.241.197-.197 1.242-.57-1.12-1.242.196.889-.889zM14.156 7.63l1.12.571.89-.889-.197 1.242 1.12.571-1.242.197-.197 1.241-.57-1.12-1.242.197.889-.89z"
      />
    </g>
    <defs>
      <clipPath id="KN_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKn;
