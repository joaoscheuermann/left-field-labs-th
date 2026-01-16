import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIl = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#IL_svg__a)">
      <path
        fill="#F0F0F0"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#0052B4"
        d="M16.518 9.392h-3.013L12 6.783l-1.506 2.61H7.481L8.987 12 7.481 14.61h3.012L12 17.218l1.506-2.608h3.013L15.01 12zm-2.668 2.609-.925 1.602h-1.85l-.926-1.602.925-1.603h1.85zM12 8.796l.344.596h-.689zm-2.776 1.602h.688l-.344.597zm0 3.205.344-.596.344.596zm2.775 1.603-.344-.596h.689zm2.776-1.603h-.689l.345-.596zm-.689-3.205h.689l-.344.597zM19.47 2.61H4.53A12 12 0 0 0 1.76 5.74h20.477a12 12 0 0 0-2.768-3.13M4.53 21.391h14.94a12 12 0 0 0 2.768-3.13H1.761a12 12 0 0 0 2.769 3.13"
      />
    </g>
    <defs>
      <clipPath id="IL_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIl;
