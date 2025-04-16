import * as React from "react";

interface SvgBiohazardProps extends React.SVGAttributes<SVGElement> {}

const SvgBiohazard = React.forwardRef<SVGSVGElement, SvgBiohazardProps>(
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
      <path d="M2 1h1v1H2zM9 1h1v1H9zM2 2h1v1H2zM5 2h1v1H5zM6 2h1v1H6zM9 2h1v1H9zM1 3h1v1H1zM2 3h1v1H2zM3 3h1v1H3zM8 3h1v1H8zM9 3h1v1H9zM10 3h1v1h-1zM3 4h1v1H3zM5 4h1v1H5zM6 4h1v1H6zM8 4h1v1H8zM1 5h1v1H1zM4 5h1v1H4zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM7 6h1v1H7zM10 6h1v1h-1zM3 7h1v1H3zM5 7h1v1H5zM6 7h1v1H6zM8 7h1v1H8zM1 8h1v1H1zM2 8h1v1H2zM3 8h1v1H3zM8 8h1v1H8zM9 8h1v1H9zM10 8h1v1h-1zM2 9h1v1H2zM5 9h1v1H5zM6 9h1v1H6zM9 9h1v1H9zM2 10h1v1H2zM9 10h1v1H9z" />
    </svg>
  )
);

SvgBiohazard.displayName = "SvgBiohazard";

export default SvgBiohazard;
