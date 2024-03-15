import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export default function DownloadIcon(props: Props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.08301 16.8661V20.9927H20.9164V16.8661M16.6359 11.2614L11.8981 15.9993L7.21101 11.2614M11.8981 3.00684V15.9951"
        stroke="#002B38"
        strokeWidth="1.58824"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
