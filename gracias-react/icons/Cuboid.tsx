import * as React from "react";

interface SvgCuboidProps extends React.SVGAttributes<SVGElement> {}

const SvgCuboid = React.forwardRef<SVGSVGElement, SvgCuboidProps>(
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
      <path d="M6 1h1v1H6zM7 1h1v1H7zM4 2h1v1H4zM5 2h1v1H5zM8 2h1v1H8zM9 2h1v1H9zM2 3h1v1H2zM3 3h1v1H3zM8 3h1v1H8zM9 3h1v1H9zM2 4h1v1H2zM3 4h1v1H3zM6 4h1v1H6zM7 4h1v1H7zM9 4h1v1H9zM2 5h1v1H2zM4 5h1v1H4zM5 5h1v1H5zM9 5h1v1H9zM2 6h1v1H2zM4 6h1v1H4zM9 6h1v1H9zM2 7h1v1H2zM4 7h1v1H4zM8 7h1v1H8zM9 7h1v1H9zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM6 8h1v1H6zM7 8h1v1H7zM4 9h1v1H4zM5 9h1v1H5z" />
    </svg>
  )
);

SvgCuboid.displayName = "SvgCuboid";

export default SvgCuboid;
