import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#VI_svg__a)">
      <path
        fill="#FCFCFC"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#FFDA44"
        d="M14.038 8.384a2.038 2.038 0 1 0-4.076 0H5.478c0 1.108.965 2.006 2.074 2.006h-.067c0 1.109.898 2.007 2.006 2.007 0 .981.705 1.797 1.636 1.971l-.005.012h1.756l-.005-.012a2.006 2.006 0 0 0 1.635-1.97 2.007 2.007 0 0 0 2.007-2.008h-.067c1.108 0 2.073-.898 2.073-2.006z"
      />
      <path
        fill="#FFDA44"
        d="m11.104 14.172-1.263 2.853a5.7 5.7 0 0 0 2.16.422 5.7 5.7 0 0 0 2.159-.422l-1.264-2.853z"
      />
      <path
        fill="#F0F0F0"
        d="M9.391 9.386v3.51c0 1.997 2.609 2.609 2.609 2.609s2.609-.612 2.609-2.609v-3.51z"
      />
      <path
        fill="#338AF3"
        d="m2.91 12.085 1.41 3.946 1.397-3.946h1.066l-2.036 5.217h-.852l-2.05-5.217zM19.304 17.302v-5.217h1.014v5.217z"
      />
      <path
        fill="#D80027"
        d="M10.434 10.52v4.254c.359.264.745.445 1.044.561V10.52zM13.564 10.52v4.254a4.6 4.6 0 0 1-1.043.561V10.52z"
      />
      <path fill="#0052B4" d="M14.609 9.386H9.39v1.655h5.218z" />
    </g>
    <defs>
      <clipPath id="VI_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVi;
