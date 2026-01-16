import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#TT_svg__a)">
      <path
        fill="#F0F0F0"
        d="M6.498 1.332a12 12 0 0 0-2.984 2.182c-.9.9-1.627 1.909-2.181 2.983l7.715 8.454 8.454 7.716a12 12 0 0 0 2.984-2.182c.9-.9 1.627-1.909 2.182-2.983l-7.716-8.454z"
      />
      <path
        fill="#000"
        d="M20.486 20.486q.755-.756 1.347-1.604L5.118 2.167a12.1 12.1 0 0 0-2.951 2.952l16.715 16.714q.846-.593 1.604-1.347"
      />
      <path
        fill="#D80027"
        d="M3.514 20.487c3.786 3.786 9.472 4.512 13.988 2.181L1.332 6.498c-2.33 4.517-1.604 10.203 2.182 13.988M20.485 3.515C16.699-.271 11.013-.998 6.497 1.333l16.17 16.17c2.33-4.517 1.604-10.202-2.182-13.988"
      />
    </g>
    <defs>
      <clipPath id="TT_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTt;
