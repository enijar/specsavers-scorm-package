import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export default function ChevronDownIcon(props: Props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_141_2055)">
        <path d="M3.69238 9.23047L12.2641 17.8022" stroke="black" strokeWidth="3.69231" strokeLinecap="round" />
        <path d="M12.2637 17.8022L20.8354 9.23047" stroke="black" strokeWidth="3.69231" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_141_2055">
          <rect width="24" height="24" fill="white" transform="translate(24) rotate(90)" />
        </clipPath>
      </defs>
    </svg>
  );
}
