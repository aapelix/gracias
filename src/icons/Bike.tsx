import * as React from "react";

interface SvgBikeProps extends React.SVGAttributes<SVGElement> {}

const SvgBike = React.forwardRef<SVGSVGElement, SvgBikeProps>(
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
      <path d="M7 1h1v1H7zM8 1h1v1H8zM7 2h1v1H7zM8 2h1v1H8zM6 3h1v1H6zM5 4h1v1H5zM7 4h1v1H7zM4 5h1v1H4zM7 5h1v1H7zM8 5h1v1H8zM5 6h1v1H5zM2 7h1v1H2zM3 7h1v1H3zM6 7h1v1H6zM8 7h1v1H8zM9 7h1v1H9zM1 8h1v1H1zM4 8h1v1H4zM6 8h1v1H6zM7 8h1v1H7zM10 8h1v1h-1zM1 9h1v1H1zM4 9h1v1H4zM7 9h1v1H7zM10 9h1v1h-1zM2 10h1v1H2zM3 10h1v1H3zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgBike.displayName = "SvgBike";

export default SvgBike;
