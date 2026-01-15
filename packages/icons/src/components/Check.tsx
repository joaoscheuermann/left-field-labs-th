import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 17.75h-.003a.75.75 0 0 1-.532-.224l-4-4.062a.75.75 0 1 1 1.069-1.053l3.469 3.524 9.466-9.466A.75.75 0 1 1 19.53 7.53l-10 10a.75.75 0 0 1-.53.22"
    />
  </svg>
);
export default SvgCheck;
