import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export default function ChevronRightIcon(props: Props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_141_1815)">
        <path d="M9.23047 20.3076L17.8022 11.7359" stroke="black" strokeWidth="3.69231" strokeLinecap="round" />
        <path d="M17.8022 11.7363L9.23047 3.16464" stroke="black" strokeWidth="3.69231" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_141_1815">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
