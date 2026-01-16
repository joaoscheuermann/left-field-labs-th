import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#LA_svg__a)">
      <path
        fill="#D80027"
        d="M22.81 6.782A12 12 0 0 0 12-.001 12 12 0 0 0 1.19 6.782L12 7.825zM1.19 17.216A12 12 0 0 0 12 24a12 12 0 0 0 10.809-6.783l-10.81-1.043z"
      />
      <path
        fill="#0052B4"
        d="M22.809 6.782H1.19A11.95 11.95 0 0 0 0 11.999c0 1.87.428 3.64 1.19 5.217H22.81A11.95 11.95 0 0 0 23.999 12c0-1.87-.427-3.64-1.19-5.217"
      />
      <path
        fill="#F0F0F0"
        d="M12 16.174a4.174 4.174 0 1 0 0-8.348 4.174 4.174 0 0 0 0 8.348"
      />
    </g>
    <defs>
      <clipPath id="LA_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLa;
