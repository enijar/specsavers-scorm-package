import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export default function SearchIcon(props: Props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20.6159 20.6993L15.1297 15.2208M15.1297 15.2208C13.7996 16.5255 12.0069 17.2504 10.1438 17.2369C8.2807 17.2235 6.49872 16.4728 5.18762 15.149C3.87652 13.8252 3.14299 12.036 3.14748 10.1729C3.15197 8.30971 3.8941 6.52414 5.21156 5.20668C6.52902 3.88921 8.3146 3.14709 10.1778 3.1426C12.0409 3.13811 13.8301 3.87163 15.1539 5.18273C16.4776 6.49384 17.2284 8.27581 17.2418 10.1389C17.2553 12.0021 16.5304 13.7947 15.2257 15.1248L15.1297 15.2208Z"
        stroke="#18995D"
        strokeWidth="1.81818"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
