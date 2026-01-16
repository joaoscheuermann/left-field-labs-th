import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 15a2.99 2.99 0 0 0-2.53 1.401l-6.674-3.337C8.923 12.732 9 12.376 9 12c0-.376-.077-.733-.204-1.065l6.674-3.337A2.99 2.99 0 0 0 18 8.998a3 3 0 1 0-3-3c0 .051.013.1.015.15L7.908 9.7A2.97 2.97 0 0 0 6 8.997a3 3 0 1 0 0 6c.729 0 1.388-.27 1.908-.703l7.107 3.553c-.002.05-.015.098-.015.15a3 3 0 1 0 6 0A2.996 2.996 0 0 0 18 15"
    />
  </svg>
);
export default SvgShare;
