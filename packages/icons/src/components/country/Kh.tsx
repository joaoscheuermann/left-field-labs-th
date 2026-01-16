import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#KH_svg__a)">
      <path
        fill="#D80027"
        d="M0 12c0 2.08.53 4.035 1.46 5.74L12 18.784l10.541-1.044a11.95 11.95 0 0 0 1.46-5.74c0-2.078-.53-4.033-1.46-5.738l-10.54-1.044L1.458 6.262A11.95 11.95 0 0 0 0 12"
      />
      <path
        fill="#0052B4"
        d="M1.459 6.261h21.082A12 12 0 0 0 12 .001C7.45 0 3.494 2.53 1.459 6.26M12 24c4.548 0 8.506-2.53 10.54-6.26H1.46A12 12 0 0 0 11.999 24"
      />
      <path
        fill="#F0F0F0"
        d="M16.174 14.347v-1.565h-1.043v-2.087l-1.044-1.043-1.043 1.043V8.608L12 7.565l-1.043 1.043v2.087L9.913 9.652 8.87 10.695v2.087H7.826v1.565H6.783v1.566h10.435v-1.566z"
      />
    </g>
    <defs>
      <clipPath id="KH_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKh;
