import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#SS_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#000"
        d="M23.064 7.347C21.246 3.03 16.977-.001 12-.001a11.96 11.96 0 0 0-8.485 3.515L6.52 7.347z"
      />
      <path
        fill="#496E2D"
        d="m6.554 16.607-3.04 3.877A11.96 11.96 0 0 0 12 23.999c4.994 0 9.275-3.052 11.082-7.392z"
      />
      <path
        fill="#A2001D"
        d="M2.609 8.826v6.304h20.978c.269-.998.413-2.047.413-3.13 0-1.099-.148-2.163-.425-3.174z"
      />
      <path
        fill="#0052B4"
        d="M3.514 3.515c-4.686 4.686-4.686 12.284 0 16.97L12 12z"
      />
      <path
        fill="#FFDA44"
        d="m3.908 9.017 1.465 2.043L7.77 10.3l-1.491 2.025 1.464 2.043-2.386-.792L3.866 15.6l.016-2.515-2.386-.793 2.396-.761z"
      />
    </g>
    <defs>
      <clipPath id="SS_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSs;
