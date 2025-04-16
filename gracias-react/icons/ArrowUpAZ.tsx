import * as React from "react";

interface SvgArrowUpAZProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowUpAZ = React.forwardRef<SVGSVGElement, SvgArrowUpAZProps>(
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
      <path d="M8 1h1v1H8zM9 1h1v1H9zM3 2h1v1H3zM7 2h1v1H7zM10 2h1v1h-1zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM10 3h1v1h-1zM1 4h1v1H1zM3 4h1v1H3zM5 4h1v1H5zM7 4h1v1H7zM10 4h1v1h-1zM3 5h1v1H3zM3 6h1v1H3zM7 6h1v1H7zM8 6h1v1H8zM9 6h1v1H9zM10 6h1v1h-1zM3 7h1v1H3zM9 7h1v1H9zM3 8h1v1H3zM8 8h1v1H8zM3 9h1v1H3zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9zM10 9h1v1h-1z" />
    </svg>
  )
);

SvgArrowUpAZ.displayName = "SvgArrowUpAZ";

export default SvgArrowUpAZ;
