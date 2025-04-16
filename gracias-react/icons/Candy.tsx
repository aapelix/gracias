import * as React from "react";

interface SvgCandyProps extends React.SVGAttributes<SVGElement> {}

const SvgCandy = React.forwardRef<SVGSVGElement, SvgCandyProps>(
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
      <path d="M6 1h1v1H6zM7 1h1v1H7zM6 2h1v1H6zM8 2h1v1H8zM9 2h1v1H9zM5 3h1v1H5zM6 3h1v1H6zM9 3h1v1H9zM4 4h1v1H4zM5 4h1v1H5zM7 4h1v1H7zM10 4h1v1h-1zM3 5h1v1H3zM5 5h1v1H5zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM10 5h1v1h-1zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM5 6h1v1H5zM7 6h1v1H7zM8 6h1v1H8zM1 7h1v1H1zM4 7h1v1H4zM5 7h1v1H5zM7 7h1v1H7zM2 8h1v1H2zM5 8h1v1H5zM6 8h1v1H6zM2 9h1v1H2zM3 9h1v1H3zM5 9h1v1H5zM4 10h1v1H4zM5 10h1v1H5z" />
    </svg>
  )
);

SvgCandy.displayName = "SvgCandy";

export default SvgCandy;
