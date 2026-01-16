import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#MM_svg__a)">
      <path
        fill="#6DA544"
        d="M23.253 16.174c.483-1.3.747-2.706.747-4.173s-.264-2.874-.747-4.174L12 6.783.746 7.827A12 12 0 0 0 0 12c0 1.467.264 2.874.746 4.173L12 17.219z"
      />
      <path
        fill="#FFDA44"
        d="M23.254 7.826C21.558 3.256 17.16 0 12 0S2.442 3.257.746 7.826z"
      />
      <path
        fill="#D80027"
        d="M12 23.999c5.16 0 9.558-3.256 11.254-7.826H.746C2.442 20.743 6.84 23.999 12 23.999"
      />
      <path
        fill="#F0F0F0"
        d="M20.23 10.153h-6.287L12 4.174l-1.942 5.979H3.77l5.086 3.695-1.942 5.978L12 16.174l5.086 3.653-1.942-5.98z"
      />
    </g>
    <defs>
      <clipPath id="MM_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMm;
