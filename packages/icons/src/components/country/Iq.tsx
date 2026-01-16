import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIq = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#IQ_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#A2001D"
        d="M12 0C6.84 0 2.442 3.256.746 7.826h22.507C21.558 3.256 17.16 0 12 0"
      />
      <path
        fill="#000"
        d="M12 24c5.16 0 9.558-3.256 11.254-7.826H.746C2.442 20.744 6.84 24 12 24"
      />
      <path
        fill="#496E2D"
        d="M9.13 11.219H6.817c.116-.45.524-.783 1.01-.783V8.871a2.61 2.61 0 0 0-2.61 2.609v1.304h3.914c.143 0 .26.117.26.261v.522H4.174v1.565h6.783v-2.087c0-1.007-.82-1.826-1.827-1.826M13.044 13.566V8.87h-1.565v6.261h2.608v-1.565zM18.26 13.566V8.87h-1.565v4.696h-.521V12h-1.566v3.13h4.696v-1.565z"
      />
    </g>
    <defs>
      <clipPath id="IQ_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIq;
