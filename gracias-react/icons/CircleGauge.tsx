import * as React from "react";

interface SvgCircleGaugeProps extends React.SVGAttributes<SVGElement> {}

const SvgCircleGauge = React.forwardRef<SVGSVGElement, SvgCircleGaugeProps>(
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
      <path d="M3 0h1v1H3zM4 0h1v1H4zM5 0h1v1H5zM6 0h1v1H6zM7 0h1v1H7zM2 1h1v1H2zM9 1h1v1H9zM1 2h1v1H1zM8 2h1v1H8zM0 3h1v1H0zM7 3h1v1H7zM10 3h1v1h-1zM0 4h1v1H0zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM10 4h1v1h-1zM0 5h1v1H0zM4 5h1v1H4zM6 5h1v1H6zM10 5h1v1h-1zM0 6h1v1H0zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM10 6h1v1h-1zM0 7h1v1H0zM10 7h1v1h-1zM1 8h1v1H1zM9 8h1v1H9zM2 9h1v1H2zM8 9h1v1H8zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgCircleGauge.displayName = "SvgCircleGauge";

export default SvgCircleGauge;
