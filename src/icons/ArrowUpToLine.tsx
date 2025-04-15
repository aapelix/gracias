import * as React from "react";

interface SvgArrowUpToLineProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowUpToLine = React.forwardRef<SVGSVGElement, SvgArrowUpToLineProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM5 3h1v1H5zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM3 5h1v1H3zM5 5h1v1H5zM7 5h1v1H7zM2 6h1v1H2zM5 6h1v1H5zM8 6h1v1H8zM5 7h1v1H5zM5 8h1v1H5zM5 9h1v1H5z" />
    </svg>
  )
);

SvgArrowUpToLine.displayName = "SvgArrowUpToLine";

export default SvgArrowUpToLine;
