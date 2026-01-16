import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#GM_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#A2001D"
        d="M12 0C7.04 0 2.782 3.012.954 7.306h22.093C21.219 3.011 16.96.001 12 .001"
      />
      <path
        fill="#496E2D"
        d="M12 24c4.961 0 9.219-3.01 11.047-7.304H.954C2.782 20.99 7.04 24.001 12 24.001"
      />
      <path
        fill="#0052B4"
        d="M23.586 8.87H.413A12 12 0 0 0 0 12c0 1.083.144 2.132.413 3.13h23.173a12.013 12.013 0 0 0 0-6.26"
      />
    </g>
    <defs>
      <clipPath id="GM_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGm;
