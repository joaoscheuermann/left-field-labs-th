import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAl = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#AL_svg__a)">
      <path
        fill="#D80027"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#000"
        d="M18.783 8.907h-4.347A1.565 1.565 0 1 0 12 6.961a1.564 1.564 0 0 0-2.87.866c0 .42.165.8.434 1.08H5.217c0 1.153 1.004 2.087 2.157 2.087h-.07c0 1.153.935 2.087 2.087 2.087 0 .374.099.724.27 1.027l-1.73 1.73 1.327 1.329 1.884-1.884q.11.041.23.064l-1.14 2.57L12 19.827l1.767-1.91-1.139-2.57q.12-.023.23-.064l1.883 1.884 1.329-1.328-1.732-1.731c.172-.303.27-.653.27-1.027a2.087 2.087 0 0 0 2.087-2.087h-.069c1.152 0 2.156-.934 2.156-2.087"
      />
    </g>
    <defs>
      <clipPath id="AL_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAl;
