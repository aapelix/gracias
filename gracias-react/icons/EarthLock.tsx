import * as React from "react";

interface SvgEarthLockProps extends React.SVGAttributes<SVGElement> {}

const SvgEarthLock = React.forwardRef<SVGSVGElement, SvgEarthLockProps>(
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
      <path d="M8 0h1v1H8zM10 0h1v1h-1zM4 1h1v1H4zM5 1h1v1H5zM8 1h1v1H8zM9 1h1v1H9zM10 1h1v1h-1zM3 2h1v1H3zM4 2h1v1H4zM7 2h1v1H7zM11 2h1v1h-1zM2 3h1v1H2zM4 3h1v1H4zM7 3h1v1H7zM11 3h1v1h-1zM1 4h1v1H1zM5 4h1v1H5zM8 4h1v1H8zM9 4h1v1H9zM10 4h1v1h-1zM1 5h1v1H1zM2 5h1v1H2zM1 6h1v1H1zM3 6h1v1H3zM8 6h1v1H8zM9 6h1v1H9zM10 6h1v1h-1zM1 7h1v1H1zM3 7h1v1H3zM4 7h1v1H4zM7 7h1v1H7zM10 7h1v1h-1zM2 8h1v1H2zM5 8h1v1H5zM7 8h1v1H7zM9 8h1v1H9zM3 9h1v1H3zM5 9h1v1H5zM7 9h1v1H7zM8 9h1v1H8zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgEarthLock.displayName = "SvgEarthLock";

export default SvgEarthLock;
