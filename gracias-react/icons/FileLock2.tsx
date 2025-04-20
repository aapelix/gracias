import * as React from "react";

interface SvgFileLock2Props extends React.SVGAttributes<SVGElement> {}

const SvgFileLock2 = React.forwardRef<SVGSVGElement, SvgFileLock2Props>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM2 2h1v1H2zM6 2h1v1H6zM7 2h1v1H7zM6 3h1v1H6zM8 3h1v1H8zM3 4h1v1H3zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM2 5h1v1H2zM3 5h1v1H3zM9 5h1v1H9zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM9 6h1v1H9zM1 7h1v1H1zM4 7h1v1H4zM9 7h1v1H9zM1 8h1v1H1zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM9 8h1v1H9zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgFileLock2.displayName = "SvgFileLock2";

export default SvgFileLock2;
