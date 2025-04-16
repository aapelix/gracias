import * as React from "react";

interface SvgChevronsUpProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronsUp = React.forwardRef<SVGSVGElement, SvgChevronsUpProps>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
      fill="currentColor"
      shapeRendering="crispEdges"
      ref={ref}
      {...props}
    >
      <path d="M5 2h1v1H5zM4 3h1v1H4zM6 3h1v1H6zM3 4h1v1H3zM7 4h1v1H7zM2 5h1v1H2zM5 5h1v1H5zM8 5h1v1H8zM4 6h1v1H4zM6 6h1v1H6zM3 7h1v1H3zM7 7h1v1H7zM2 8h1v1H2zM8 8h1v1H8z" />
    </svg>
  )
);

SvgChevronsUp.displayName = "SvgChevronsUp";

export default SvgChevronsUp;
