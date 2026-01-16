import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#CF_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#0052B4"
        d="M22.54 6.26A12.03 12.03 0 0 0 15.13.412l-.522 5.848zM1.459 6.26h7.932L8.87.412A12.03 12.03 0 0 0 1.46 6.26"
      />
      <path
        fill="#6DA544"
        d="M14.608 12.002v5.74h7.933C23.47 16.035 24 14.08 24 12.001zM9.391 12.001H0c0 2.079.529 4.034 1.46 5.74H9.39z"
      />
      <path
        fill="#FFDA44"
        d="M1.459 17.74a12.03 12.03 0 0 0 7.41 5.848l.522-5.115zM15.13 23.588a12.03 12.03 0 0 0 7.41-5.848l-7.932.734zM14.608 18.474l7.932-.734h-7.932zM9.391 17.74H1.46l7.932.733z"
      />
      <path
        fill="#D80027"
        d="M12 0c-1.083 0-2.132.145-3.13.414v23.173c.998.27 2.047.413 3.13.413s2.132-.144 3.13-.413V.414A12 12 0 0 0 12 0"
      />
      <path
        fill="#FFDA44"
        d="m6.454 2.609.324.996h1.048l-.848.616.324.997-.848-.616-.848.616.324-.997-.847-.616H6.13z"
      />
    </g>
    <defs>
      <clipPath id="CF_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCf;
