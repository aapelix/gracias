import * as React from "react";

interface SvgBatteryChargingProps extends React.SVGAttributes<SVGElement> {}

const SvgBatteryCharging = React.forwardRef<SVGSVGElement, SvgBatteryChargingProps>(
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
      <path d="M2 3h1v1H2zM5 3h1v1H5zM7 3h1v1H7zM1 4h1v1H1zM4 4h1v1H4zM8 4h1v1H8zM1 5h1v1H1zM4 5h1v1H4zM8 5h1v1H8zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM5 6h1v1H5zM8 6h1v1H8zM10 6h1v1h-1zM1 7h1v1H1zM5 7h1v1H5zM8 7h1v1H8zM2 8h1v1H2zM5 8h1v1H5zM7 8h1v1H7zM4 9h1v1H4z" />
    </svg>
  )
);

SvgBatteryCharging.displayName = "SvgBatteryCharging";

export default SvgBatteryCharging;
