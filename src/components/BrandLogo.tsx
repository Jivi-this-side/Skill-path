import React from "react";

type Props = {
  footer?: boolean;
};

export default function BrandLogo({ footer = false }: Props) {
  return (
    <a
      href="#top"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="Skillpath home"
    >
      <svg
        className="brand-logo"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M236.638 66.4458C269.993 51.2867 290.983 110.987 258.021 124.999C225.328 138.895 212.437 95.3634 228.759 73.716"
          stroke="currentColor"
          strokeOpacity=".9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M261.635 151.32C251.977 155.223 225.275 136.495 216.324 143.164C209.385 148.335 186.657 214.263 193.997 223.746"
          stroke="currentColor"
          strokeOpacity=".9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M261.636 152.508C268.097 181.554 280.215 209.925 283.223 239.936"
          stroke="currentColor"
          strokeOpacity=".9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M216.302 143.873C217.746 164.541 225.297 184.61 223.614 205.397"
          stroke="currentColor"
          strokeOpacity=".9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M262.715 154.667C260.215 174.271 255.24 193.658 251.921 212.952"
          stroke="currentColor"
          strokeOpacity=".9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M227.096 209.847C234.306 210.429 241.569 211.029 248.683 210.378"
          stroke="currentColor"
          strokeOpacity=".9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M254.072 215.111C281.277 245 276.437 250.118 238.969 276.635"
          stroke="currentColor"
          strokeOpacity=".9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M224.937 209.714C223.387 255.719 220.619 290.298 220.619 336"
          stroke="currentColor"
          strokeOpacity=".9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          opacity=".5"
          d="M211.984 142.794C160.288 148.04 171.549 195.187 153.655 228.369C139.878 253.918 110.921 263.272 118.137 299.302"
          stroke="currentColor"
          strokeOpacity=".9"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          opacity=".5"
          d="M133.191 297.082C154.52 282.445 161.621 310.09 179.576 312.131C193.457 313.711 206.046 299.526 220.081 298.419C241.457 296.736 262.269 314.122 282.144 299.758"
          stroke="currentColor"
          strokeOpacity=".9"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="brand-name">
        skill<span>path</span>
      </span>
    </a>
  );
}
