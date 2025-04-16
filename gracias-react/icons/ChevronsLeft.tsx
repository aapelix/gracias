import * as React from "react";

interface SvgChevronsLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronsLeft = React.forwardRef<SVGSVGElement, SvgChevronsLeftProps>(
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
      <path d="M5 2h1v1H5zM8 2h1v1H8zM4 3h1v1H4zM7 3h1v1H7zM3 4h1v1H3zM6 4h1v1H6zM2 5h1v1H2zM5 5h1v1H5zM3 6h1v1H3zM6 6h1v1H6zM4 7h1v1H4zM7 7h1v1H7zM5 8h1v1H5zM8 8h1v1H8z" />
    </svg>
  )
);

SvgChevronsLeft.displayName = "SvgChevronsLeft";

export default SvgChevronsLeft;
