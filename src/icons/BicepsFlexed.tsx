import * as React from "react";

interface SvgBicepsFlexedProps extends React.SVGAttributes<SVGElement> {}

const SvgBicepsFlexed = React.forwardRef<SVGSVGElement, SvgBicepsFlexedProps>(
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
      <path d="M4 0h1v1H4zM5 0h1v1H5zM3 1h1v1H3zM6 1h1v1H6zM2 2h1v1H2zM3 2h1v1H3zM6 2h1v1H6zM1 3h1v1H1zM4 3h1v1H4zM5 3h1v1H5zM1 4h1v1H1zM2 4h1v1H2zM4 4h1v1H4zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM1 5h1v1H1zM4 5h1v1H4zM6 5h1v1H6zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM11 6h1v1h-1zM1 7h1v1H1zM4 7h1v1H4zM8 7h1v1H8zM11 7h1v1h-1zM1 8h1v1H1zM11 8h1v1h-1zM1 9h1v1H1zM10 9h1v1h-1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgBicepsFlexed.displayName = "SvgBicepsFlexed";

export default SvgBicepsFlexed;
