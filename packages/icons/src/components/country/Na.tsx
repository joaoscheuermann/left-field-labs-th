import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#NA_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#A2001D"
        d="M3.515 20.485c.503.503 1.04.952 1.603 1.348L21.833 5.118a12.1 12.1 0 0 0-2.952-2.951L2.167 18.881q.592.847 1.348 1.604"
      />
      <path
        fill="#0052B4"
        d="M3.515 3.515C-.271 7.3-.998 12.986 1.333 17.502l16.17-16.169C12.985-.997 7.3-.271 3.514 3.515"
      />
      <path
        fill="#496E2D"
        d="M20.486 20.485c3.786-3.786 4.512-9.471 2.182-13.987L6.498 22.667c4.517 2.33 10.202 1.604 13.988-2.182"
      />
      <path
        fill="#FFDA44"
        d="m9.913 6.782-1.344.632.716 1.303-1.46-.28-.185 1.475-1.017-1.085-1.017 1.085-.185-1.475-1.46.28.715-1.303-1.344-.632 1.344-.633-.716-1.302 1.46.28.186-1.476 1.017 1.085L7.64 3.651l.185 1.475 1.46-.279-.716 1.302z"
      />
    </g>
    <defs>
      <clipPath id="NA_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNa;
