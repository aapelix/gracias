import * as React from "react";

interface SvgFileArchiveProps extends React.SVGAttributes<SVGElement> {}

const SvgFileArchive = React.forwardRef<SVGSVGElement, SvgFileArchiveProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM2 2h1v1H2zM6 2h1v1H6zM7 2h1v1H7zM2 3h1v1H2zM4 3h1v1H4zM6 3h1v1H6zM8 3h1v1H8zM2 4h1v1H2zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM2 5h1v1H2zM4 5h1v1H4zM9 5h1v1H9zM2 6h1v1H2zM9 6h1v1H9zM2 7h1v1H2zM4 7h1v1H4zM9 7h1v1H9zM4 8h1v1H4zM9 8h1v1H9zM3 9h1v1H3zM5 9h1v1H5zM9 9h1v1H9zM4 10h1v1H4zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgFileArchive.displayName = "SvgFileArchive";

export default SvgFileArchive;
