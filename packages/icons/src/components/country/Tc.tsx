import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#TC_svg__a)">
      <path
        fill="#0052B4"
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12C0 12.003 12 .001 12 0c6.627 0 12 5.373 12 12"
      />
      <path fill="#F0F0F0" d="M11.968 12H12v-.032z" />
      <path
        fill="#F0F0F0"
        d="M12 6.261V.001h-.002C5.373 0 0 5.373 0 12h6.261V8.474l3.526 3.526h2.181l.033-.033V9.787L8.475 6.261z"
      />
      <path
        fill="#D80027"
        d="M6.071 1.565a12.06 12.06 0 0 0-4.506 4.506v5.93h3.13V4.695H12v-3.13z"
      />
      <path fill="#D80027" d="M12 10.524 7.738 6.261H6.261L12.001 12z" />
      <path
        fill="#FFDA44"
        d="M13.565 6.26V12c0 2.795 3.652 3.652 3.652 3.652s3.652-.857 3.652-3.653V6.26z"
      />
      <path
        fill="#FF9811"
        d="M16.696 8.348c0 .576-.467 2.087-1.044 2.087-.576 0-1.043-1.511-1.043-2.087s1.043-1.044 1.043-1.044 1.044.467 1.044 1.044"
      />
      <path
        fill="#A2001D"
        d="M19.464 9.484c.169-.41.3-1.011.3-1.31 0-.48-.627-.87-.627-.87s-.626.39-.626.87c0 .299.131.9.3 1.31l-.362.816a1.83 1.83 0 0 0 1.377 0z"
      />
      <path
        fill="#6DA544"
        d="M16.435 12s-.522 1.043-.522 2.087h2.609C18.522 13.043 18 12 18 12l-.782-.522z"
      />
      <path fill="#D80027" d="M18 12v-.26a.783.783 0 0 0-1.565 0V12z" />
    </g>
    <defs>
      <clipPath id="TC_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTc;
