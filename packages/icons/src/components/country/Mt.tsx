import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#MT_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#D80027"
        d="M12 0c6.627 0 12 5.372 12 12 0 6.627-5.373 12-12 12"
      />
      <path
        fill="#ACABB1"
        d="M8.347 4.696V3.131H6.782v1.565H5.217v1.566h1.565v1.565h1.565V6.262h1.566V4.696z"
      />
    </g>
    <defs>
      <clipPath id="MT_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMt;
