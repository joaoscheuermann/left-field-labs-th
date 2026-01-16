import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#MA_svg__a)">
      <path
        fill="#D80027"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#FFDA44"
        d="M19.092 9.848h-5.418L12 4.695l-1.674 5.153H4.91l4.383 3.184-1.675 5.152L12 15l4.383 3.184-1.674-5.152zm-8.574 2.785.566-1.742h1.832l.566 1.742L12 13.71zm2.06-2.785h-1.155L12 8.072zm1.792 2.14-.357-1.097h1.867zm-4.383-1.097-.356 1.098-1.51-1.098zm-.385 4.562.577-1.776.934.678zm3.286-1.098.934-.678.576 1.776z"
      />
    </g>
    <defs>
      <clipPath id="MA_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMa;
