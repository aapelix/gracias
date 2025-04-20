import * as React from "react";

interface SvgFlipHorizontalProps extends React.SVGAttributes<SVGElement> {}

const SvgFlipHorizontal = React.forwardRef<SVGSVGElement, SvgFlipHorizontalProps>(
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
      <path d="M5 0h1v1H5zM1 1h1v1H1zM2 1h1v1H2zM3 1h1v1H3zM5 1h1v1H5zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM1 2h1v1H1zM9 2h1v1H9zM1 3h1v1H1zM5 3h1v1H5zM9 3h1v1H9zM1 4h1v1H1zM5 4h1v1H5zM9 4h1v1H9zM1 5h1v1H1zM9 5h1v1H9zM1 6h1v1H1zM5 6h1v1H5zM9 6h1v1H9zM1 7h1v1H1zM5 7h1v1H5zM9 7h1v1H9zM1 8h1v1H1zM9 8h1v1H9zM1 9h1v1H1zM2 9h1v1H2zM3 9h1v1H3zM5 9h1v1H5zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9zM5 10h1v1H5z" />
    </svg>
  )
);

SvgFlipHorizontal.displayName = "SvgFlipHorizontal";

export default SvgFlipHorizontal;
