import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export default function ChevronUpIcon(props: Props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_141_2051)">
        <path d="M20.3076 14.7695L11.7359 6.19784" stroke="black" strokeWidth="3.69231" strokeLinecap="round" />
        <path d="M11.7363 6.19784L3.16464 14.7695" stroke="black" strokeWidth="3.69231" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_141_2051">
          <rect width="24" height="24" fill="white" transform="translate(0 24) rotate(-90)" />
        </clipPath>
      </defs>
    </svg>
  );
}
