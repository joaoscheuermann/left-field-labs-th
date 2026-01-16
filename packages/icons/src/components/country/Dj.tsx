import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDj = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#DJ_svg__a)">
      <path
        fill="#338AF3"
        d="M10.956 13.044s-7.435-9.53-7.442-9.529A11.96 11.96 0 0 1 12 0c6.627 0 12 5.373 12 12z"
      />
      <path
        fill="#6DA544"
        d="M10.956 12s-7.435 8.486-7.442 8.485A11.96 11.96 0 0 0 12 23.999c6.627 0 12-5.372 12-12z"
      />
      <path
        fill="#F0F0F0"
        d="M3.514 3.515c-4.686 4.686-4.686 12.284 0 16.97L12 12z"
      />
      <path
        fill="#D80027"
        d="m4.856 8.87.777 2.39h2.515L6.114 12.74l.776 2.391-2.034-1.478-2.034 1.478.777-2.391-2.034-1.478h2.514z"
      />
    </g>
    <defs>
      <clipPath id="DJ_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDj;
