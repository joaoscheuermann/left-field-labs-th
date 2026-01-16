import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGw = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#GW_svg__a)">
      <path
        fill="#FFDA44"
        d="M12 0c-1.084 0-2.133.144-3.13.413L7.825 12l1.043 11.587c.998.269 2.047.413 3.13.413 6.628 0 12-5.373 12-12S18.628 0 12 0"
      />
      <path
        fill="#6DA544"
        d="m7.826 12 1.043 11.587c.998.27 2.047.413 3.13.413 6.628 0 12-5.372 12-12z"
      />
      <path
        fill="#D80027"
        d="M0 12c0 4.548 2.531 8.505 6.261 10.54V1.46a12 12 0 0 0-6.26 10.54"
      />
      <path
        fill="#D80027"
        d="M0 12c0 5.544 3.76 10.21 8.87 11.586V.413C3.76 1.79 0 6.455 0 12"
      />
      <path
        fill="#000"
        d="m4.534 8.868.777 2.392h2.515l-2.034 1.478.777 2.391-2.035-1.478L2.5 15.13l.777-2.391-2.034-1.478h2.514z"
      />
    </g>
    <defs>
      <clipPath id="GW_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGw;
