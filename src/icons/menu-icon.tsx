import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export default function MenuIcon(props: Props) {
  return (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect y="6" width="24" height="2" fill="#062631" />
      <rect y="14" width="24" height="2" fill="#062631" />
    </svg>
  );
}
