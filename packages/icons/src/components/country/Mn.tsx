import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#MN_svg__a)">
      <path
        fill="#0052B4"
        d="M12 24c1.467 0 2.874-.264 4.174-.746l.521-11.253L16.174.747A12 12 0 0 0 12 0c-1.468 0-2.874.265-4.174.747L7.304 12l.522 11.253c1.3.482 2.706.746 4.174.746"
      />
      <path
        fill="#A2001D"
        d="M0 12c0 5.16 3.256 9.558 7.826 11.254V.747C3.256 2.442 0 6.84 0 12M16.174.746v22.507C20.744 21.558 24 17.16 24 12c0-5.16-3.257-9.558-7.826-11.254"
      />
      <path
        fill="#FFDA44"
        d="M6.783 11.999H5.739v4.174h1.043zM2.609 11.999H1.565v4.174H2.61zM4.174 14.609a1.044 1.044 0 1 0 0-2.088 1.044 1.044 0 0 0 0 2.087M4.174 10.434a.522.522 0 1 0 0-1.044.522.522 0 0 0 0 1.044M5.217 15.129H3.13v1.043h2.087zM5.217 10.955H3.13V12h2.087zM4.174 6.26l.37 1.137H5.74l-.968.703.37 1.137-.968-.703-.967.703.37-1.137-.968-.703h1.196z"
      />
    </g>
    <defs>
      <clipPath id="MN_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMn;
