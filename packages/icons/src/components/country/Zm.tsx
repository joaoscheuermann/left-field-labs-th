import * as React from 'react';
import type { SVGProps } from 'react';
const SvgZm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ZM_svg__a)">
      <path
        fill="#496E2D"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#D80027"
        d="M16.695 11.999H12v12c1.402 0 2.749-.241 4-.684z"
      />
      <path fill="#FF9811" d="M20 20.943a11.97 11.97 0 0 0 4-8.944h-4.696z" />
      <path fill="#000" d="M16 11.999v11.316a12 12 0 0 0 4-2.373V12z" />
      <path
        fill="#FF9811"
        d="M22.174 7.827h-3.13a1.044 1.044 0 0 0-2.088 0h-3.13c0 .576.502 1.043 1.078 1.043h-.035c0 .577.467 1.044 1.044 1.044 0 .576.467 1.043 1.043 1.043h2.087c.577 0 1.044-.467 1.044-1.043.576 0 1.043-.467 1.043-1.044h-.034c.576 0 1.078-.467 1.078-1.043"
      />
    </g>
    <defs>
      <clipPath id="ZM_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZm;
