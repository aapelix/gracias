import * as React from "react";

interface SvgBaggageClaimProps extends React.SVGAttributes<SVGElement> {}

const SvgBaggageClaim = React.forwardRef<SVGSVGElement, SvgBaggageClaimProps>(
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
      <path d="M6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM6 2h1v1H6zM8 2h1v1H8zM1 3h1v1H1zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM10 3h1v1h-1zM2 4h1v1H2zM4 4h1v1H4zM6 4h1v1H6zM8 4h1v1H8zM10 4h1v1h-1zM2 5h1v1H2zM4 5h1v1H4zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1h-1zM2 6h1v1H2zM4 6h1v1H4zM6 6h1v1H6zM8 6h1v1H8zM10 6h1v1h-1zM2 7h1v1H2zM4 7h1v1H4zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM2 8h1v1H2zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM2 9h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1zM4 11h1v1H4zM5 11h1v1H5zM8 11h1v1H8zM9 11h1v1H9z" />
    </svg>
  )
);

SvgBaggageClaim.displayName = "SvgBaggageClaim";

export default SvgBaggageClaim;
