import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m19.53 14.53-7 7a.76.76 0 0 1-.817.162.7.7 0 0 1-.243-.162l-7-7a.75.75 0 1 1 1.061-1.061l5.72 5.72V3a.75.75 0 0 1 1.5 0v16.189l5.72-5.72a.75.75 0 1 1 1.06 1.061"
    />
  </svg>
);
export default SvgArrowDown;
