import * as React from "react";

interface SvgBatteryFullProps extends React.SVGAttributes<SVGElement> {}

const SvgBatteryFull = React.forwardRef<SVGSVGElement, SvgBatteryFullProps>(
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
      <path d="M2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM1 4h1v1H1zM8 4h1v1H8zM1 5h1v1H1zM3 5h1v1H3zM5 5h1v1H5zM7 5h1v1H7zM8 5h1v1H8zM10 5h1v1h-1zM1 6h1v1H1zM3 6h1v1H3zM5 6h1v1H5zM7 6h1v1H7zM8 6h1v1H8zM10 6h1v1h-1zM1 7h1v1H1zM8 7h1v1H8zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7z" />
    </svg>
  )
);

SvgBatteryFull.displayName = "SvgBatteryFull";

export default SvgBatteryFull;
