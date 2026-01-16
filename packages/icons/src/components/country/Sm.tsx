import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#SM_svg__a)">
      <path
        fill="#338AF3"
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12c.522 0 12-1.565 12-1.565z"
      />
      <path fill="#F0F0F0" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12" />
      <path
        fill="#6DA544"
        d="M16.763 8.28 12 13.045 7.237 8.281a5.7 5.7 0 0 0-.976 3.198v1.565a5.75 5.75 0 0 0 3.878 5.43c-.301.589-.25 1.324.19 1.874l1.706-1.366 1.705 1.366a1.74 1.74 0 0 0 .18-1.896 5.75 5.75 0 0 0 3.82-5.408v-1.565c0-1.183-.36-2.284-.977-3.198"
      />
      <path
        fill="#FFDA44"
        d="M12 17.217a4.18 4.18 0 0 1-4.174-4.173v-1.566A4.18 4.18 0 0 1 12 7.304a4.18 4.18 0 0 1 4.174 4.174v1.566A4.18 4.18 0 0 1 12 17.217"
      />
      <path
        fill="#338AF3"
        d="M14.609 13.043v-1.565A2.61 2.61 0 0 0 12 8.87a2.61 2.61 0 0 0-2.608 2.61v1.564l2.608.522z"
      />
      <path
        fill="#6DA544"
        d="M9.392 13.043A2.61 2.61 0 0 0 12 15.652a2.61 2.61 0 0 0 2.609-2.609z"
      />
      <path
        fill="#FFDA44"
        d="M15.13 7.304a1.565 1.565 0 0 0-2.608-1.166v-.92h.521V4.173h-.521v-.522h-1.044v.522h-.521v1.043h.521v.92A1.565 1.565 0 0 0 9.391 8.47v.921h5.218v-.92c.32-.287.521-.704.521-1.167"
      />
    </g>
    <defs>
      <clipPath id="SM_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSm;
