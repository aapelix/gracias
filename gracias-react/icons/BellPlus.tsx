import * as React from "react";

interface SvgBellPlusProps extends React.SVGAttributes<SVGElement> {}

const SvgBellPlus = React.forwardRef<SVGSVGElement, SvgBellPlusProps>(
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
      <path d="M4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM3 2h1v1H3zM3 3h1v1H3zM8 3h1v1H8zM3 4h1v1H3zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM3 5h1v1H3zM8 5h1v1H8zM2 6h1v1H2zM9 6h1v1H9zM2 7h1v1H2zM9 7h1v1H9zM1 8h1v1H1zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM10 8h1v1h-1zM4 10h1v1H4zM7 10h1v1H7zM5 11h1v1H5zM6 11h1v1H6z" />
    </svg>
  )
);

SvgBellPlus.displayName = "SvgBellPlus";

export default SvgBellPlus;
