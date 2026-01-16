import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#MY_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#D80027"
        d="M11.478 12H24c0-1.083-.144-2.132-.413-3.13H11.478zM11.478 5.739h10.76a12 12 0 0 0-2.768-3.13h-7.992zM12 24c2.824 0 5.42-.976 7.47-2.608H4.53A11.95 11.95 0 0 0 12 24M1.761 18.26H22.24a12 12 0 0 0 1.348-3.13H.414c.3 1.116.758 2.168 1.347 3.13"
      />
      <path fill="#0052B4" d="M12 12V0C5.373 0 0 5.373 0 12z" />
      <path
        fill="#FFDA44"
        d="M7.98 10.27a2.967 2.967 0 1 1 1.412-5.577 3.652 3.652 0 1 0 0 5.222c-.42.227-.901.356-1.412.356"
      />
      <path
        fill="#FFDA44"
        d="m8.817 5.217.527 1.102 1.19-.275L10 7.143l.957.759-1.191.268.003 1.221-.952-.764-.953.764.003-1.22-1.191-.27.957-.758L7.1 6.044l1.19.275z"
      />
    </g>
    <defs>
      <clipPath id="MY_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMy;
