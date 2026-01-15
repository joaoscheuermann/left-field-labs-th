import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEnvelope = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 20.75H6c-2.418 0-3.75-1.332-3.75-3.75V8c0-2.418 1.332-3.75 3.75-3.75h12c2.418 0 3.75 1.332 3.75 3.75v9c0 2.418-1.332 3.75-3.75 3.75m-12-15c-1.577 0-2.25.673-2.25 2.25v9c0 1.577.673 2.25 2.25 2.25h12c1.577 0 2.25-.673 2.25-2.25V8c0-1.577-.673-2.25-2.25-2.25zm7.03 7.429 4.91-3.572a.75.75 0 1 0-.882-1.213l-4.912 3.572a.25.25 0 0 1-.293 0L6.941 8.394a.75.75 0 0 0-.883 1.213l4.912 3.573a1.75 1.75 0 0 0 2.06-.001"
    />
  </svg>
);
export default SvgEnvelope;
