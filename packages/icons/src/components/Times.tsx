import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTimes = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.53 17.47a.75.75 0 0 1-1.06 1.061L12 13.061l-5.47 5.47a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.061L10.94 12 5.47 6.53A.75.75 0 1 1 6.531 5.47l5.47 5.47 5.47-5.47a.75.75 0 1 1 1.061 1.061L13.062 12z"
    />
  </svg>
);
export default SvgTimes;
