import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#CU_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12S0 5.373 0 12c0 6.628 5.373 12 12 12"
      />
      <path
        fill="#0052B4"
        d="M12 0a11.98 11.98 0 0 0-9.601 4.8h19.2A11.98 11.98 0 0 0 12 0M12 24c3.925 0 7.41-1.885 9.6-4.8H2.399a11.98 11.98 0 0 0 9.6 4.8M0 12c0 .822.083 1.625.24 2.4h23.52a12.05 12.05 0 0 0 0-4.8H.24C.083 10.376 0 11.178 0 12"
      />
      <path
        fill="#D80027"
        d="M3.515 3.515c-4.687 4.686-4.687 12.284 0 16.97L12 12z"
      />
      <path
        fill="#F0F0F0"
        d="m4.857 8.87.777 2.391h2.514l-2.034 1.478.777 2.391-2.034-1.478-2.035 1.478.777-2.391-2.034-1.478H4.08z"
      />
    </g>
    <defs>
      <clipPath id="CU_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCu;
