import * as React from "react";

interface SvgBookLockProps extends React.SVGAttributes<SVGElement> {}

const SvgBookLock = React.forwardRef<SVGSVGElement, SvgBookLockProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM8 1h1v1H8zM9 1h1v1H9zM2 2h1v1H2zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM10 2h1v1h-1zM2 3h1v1H2zM7 3h1v1H7zM10 3h1v1h-1zM2 4h1v1H2zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM10 4h1v1h-1zM2 5h1v1H2zM2 6h1v1H2zM9 6h1v1H9zM2 7h1v1H2zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM8 7h1v1H8zM9 7h1v1H9zM2 8h1v1H2zM3 8h1v1H3zM9 8h1v1H9zM2 9h1v1H2zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgBookLock.displayName = "SvgBookLock";

export default SvgBookLock;
