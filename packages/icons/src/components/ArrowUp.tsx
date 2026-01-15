import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.53 10.53a.75.75 0 0 1-1.06 0l-5.72-5.72V21a.75.75 0 0 1-1.5 0V4.811l-5.72 5.72a.75.75 0 1 1-1.061-1.06l7-7a.75.75 0 0 1 .817-.163.8.8 0 0 1 .244.162l7 7a.75.75 0 0 1 0 1.06"
    />
  </svg>
);
export default SvgArrowUp;
