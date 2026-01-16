import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAx = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#AX_svg__a)">
      <path
        fill="#FFDA44"
        d="M23.586 15.13a12.014 12.014 0 0 0 0-6.26L10.956.044a11.94 11.94 0 0 0-6.26 2.434L.412 8.869A12 12 0 0 0 0 12c0 1.077.142 2.12.408 3.114l4.287 6.407a11.94 11.94 0 0 0 6.261 2.434z"
      />
      <path
        fill="#0052B4"
        d="M.413 15.13a12 12 0 0 0 4.282 6.39v-6.39zM10.956 23.955q.516.045 1.043.045c5.545 0 10.21-3.76 11.587-8.87h-12.63zM23.586 8.87C22.209 3.76 17.544 0 11.999 0q-.527 0-1.043.046V8.87zM4.695 2.48A12 12 0 0 0 .413 8.87h4.282z"
      />
      <path
        fill="#D80027"
        d="M23.899 10.434H9.392V.284c-1.11.247-2.16.645-3.13 1.175v8.975H.101a12 12 0 0 0 0 3.13h6.16v8.976c.97.53 2.02.928 3.13 1.174v-10.15h14.507a12.1 12.1 0 0 0 0-3.13"
      />
    </g>
    <defs>
      <clipPath id="AX_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAx;
