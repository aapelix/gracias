import * as React from "react";

interface SvgArchiveRestoreProps extends React.SVGAttributes<SVGElement> {}

const SvgArchiveRestore = React.forwardRef<SVGSVGElement, SvgArchiveRestoreProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM1 2h1v1H1zM10 2h1v1h-1zM1 3h1v1H1zM10 3h1v1h-1zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM2 5h1v1H2zM9 5h1v1H9zM2 6h1v1H2zM5 6h1v1H5zM9 6h1v1H9zM2 7h1v1H2zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM9 7h1v1H9zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM9 8h1v1H9zM2 9h1v1H2zM5 9h1v1H5zM9 9h1v1H9zM3 10h1v1H3zM5 10h1v1H5zM8 10h1v1H8zM5 11h1v1H5z" />
    </svg>
  )
);

SvgArchiveRestore.displayName = "SvgArchiveRestore";

export default SvgArchiveRestore;
