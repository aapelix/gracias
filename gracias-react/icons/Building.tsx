import * as React from "react";

interface SvgBuildingProps extends React.SVGAttributes<SVGElement> {}

const SvgBuilding = React.forwardRef<SVGSVGElement, SvgBuildingProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM2 2h1v1H2zM10 2h1v1h-1zM2 3h1v1H2zM4 3h1v1H4zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1h-1zM2 4h1v1H2zM10 4h1v1h-1zM2 5h1v1H2zM4 5h1v1H4zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1h-1zM2 6h1v1H2zM10 6h1v1h-1zM2 7h1v1H2zM4 7h1v1H4zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM2 8h1v1H2zM10 8h1v1h-1zM2 9h1v1H2zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM10 9h1v1h-1zM2 10h1v1H2zM5 10h1v1H5zM7 10h1v1H7zM10 10h1v1h-1zM3 11h1v1H3zM4 11h1v1H4zM5 11h1v1H5zM6 11h1v1H6zM7 11h1v1H7zM8 11h1v1H8zM9 11h1v1H9z" />
    </svg>
  )
);

SvgBuilding.displayName = "SvgBuilding";

export default SvgBuilding;
