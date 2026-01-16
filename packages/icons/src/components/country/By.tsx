import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#BY_svg__a)">
      <path
        fill="#FCFCFC"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#A2001D"
        d="M4.957 11.129 3.652 8.762l1.305-2.329 1.304 2.33zM2.348 11.129 1.043 8.762l1.305-2.329 1.304 2.33zM4.957 17.564l-1.305-2.366 1.305-2.33 1.304 2.33zM2.348 17.564l-1.305-2.366 1.305-2.33 1.304 2.33zM6.26 2.329l-.369-.66q-.995.591-1.856 1.356l.921 1.67zM4.956 19.304l-.93 1.662q.86.766 1.854 1.357l.38-.69z"
      />
      <path
        fill="#6DA544"
        d="M7.304 15.13v7.916C8.746 23.66 10.334 24 12 24c5.16 0 9.558-3.256 11.253-7.826z"
      />
      <path
        fill="#A2001D"
        d="M23.254 16.174c.482-1.3.746-2.706.746-4.174 0-6.627-5.373-12-12-12-1.666 0-3.254.34-4.696.954v15.22z"
      />
    </g>
    <defs>
      <clipPath id="BY_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBy;
