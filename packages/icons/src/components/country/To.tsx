import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#TO_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#D80027"
        d="M7.826 6.261V4.696H6.261v1.565H4.696v1.566H6.26v1.565h1.565V7.827h1.565V6.26z"
      />
      <path
        fill="#D80027"
        d="M12 0v12H0c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0"
      />
    </g>
    <defs>
      <clipPath id="TO_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTo;
