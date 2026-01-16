import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#PR_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#D80027"
        d="M11.999 0a11.98 11.98 0 0 0-9.6 4.8h19.2A11.98 11.98 0 0 0 12 0M11.999 24c3.926 0 7.411-1.886 9.6-4.8H2.4a11.98 11.98 0 0 0 9.6 4.8M0 12q.002 1.235.24 2.4h23.52a12.1 12.1 0 0 0 0-4.8H.24C.082 10.375 0 11.178 0 12"
      />
      <path
        fill="#0052B4"
        d="M3.514 3.516c-4.686 4.686-4.686 12.284 0 16.97L12 12.001z"
      />
      <path
        fill="#F0F0F0"
        d="m4.857 8.869.777 2.391h2.515l-2.035 1.478.777 2.392-2.034-1.479-2.034 1.479.777-2.392-2.035-1.478H4.08z"
      />
    </g>
    <defs>
      <clipPath id="PR_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPr;
