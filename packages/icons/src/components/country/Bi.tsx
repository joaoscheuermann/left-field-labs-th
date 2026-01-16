import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#BI_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#D80027"
        d="M19.307 2.48a12.006 12.006 0 0 0-14.613 0L12 9.787zM12 14.214l-7.306 7.307a12.006 12.006 0 0 0 14.613 0z"
      />
      <path
        fill="#6DA544"
        d="M9.787 12 2.48 4.694a12.006 12.006 0 0 0 0 14.613zM14.214 12l7.307 7.307a12.006 12.006 0 0 0 0-14.613z"
      />
      <path
        fill="#F0F0F0"
        d="M12 17.218a5.217 5.217 0 1 0 0-10.435 5.217 5.217 0 0 0 0 10.435"
      />
      <path
        fill="#D80027"
        d="m12 8.348.452.783h.903l-.452.782.452.783h-.903l-.452.783-.452-.783h-.904l.452-.783-.452-.782h.904zM9.703 12.001l.452.783h.904l-.452.782.452.783h-.904l-.452.782-.451-.782h-.904l.452-.783-.452-.782h.904zM14.297 12.001l.452.783h.903l-.451.782.451.783h-.903l-.452.782-.452-.782h-.904l.452-.783-.452-.782h.904z"
      />
    </g>
    <defs>
      <clipPath id="BI_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBi;
