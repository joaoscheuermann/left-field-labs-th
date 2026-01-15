import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.53 20.47-3.841-3.841A8.7 8.7 0 0 0 19.75 11c0-4.825-3.925-8.75-8.75-8.75S2.25 6.175 2.25 11s3.925 8.75 8.75 8.75a8.7 8.7 0 0 0 5.629-2.061l3.841 3.841a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06M3.75 11c0-3.998 3.252-7.25 7.25-7.25s7.25 3.252 7.25 7.25-3.252 7.25-7.25 7.25S3.75 14.998 3.75 11"
    />
  </svg>
);
export default SvgSearch;
