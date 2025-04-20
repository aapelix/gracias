import * as React from "react";

interface SvgFoldHorizontalProps extends React.SVGAttributes<SVGElement> {}

const SvgFoldHorizontal = React.forwardRef<SVGSVGElement, SvgFoldHorizontalProps>(
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
      <path d="M5 0h1v1H5zM5 1h1v1H5zM1 3h1v1H1zM5 3h1v1H5zM9 3h1v1H9zM2 4h1v1H2zM5 4h1v1H5zM8 4h1v1H8zM0 5h1v1H0zM1 5h1v1H1zM2 5h1v1H2zM3 5h1v1H3zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM10 5h1v1h-1zM2 6h1v1H2zM5 6h1v1H5zM8 6h1v1H8zM1 7h1v1H1zM5 7h1v1H5zM9 7h1v1H9zM5 9h1v1H5zM5 10h1v1H5z" />
    </svg>
  )
);

SvgFoldHorizontal.displayName = "SvgFoldHorizontal";

export default SvgFoldHorizontal;
