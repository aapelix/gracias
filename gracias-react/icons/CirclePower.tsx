import * as React from "react";

interface SvgCirclePowerProps extends React.SVGAttributes<SVGElement> {}

const SvgCirclePower = React.forwardRef<SVGSVGElement, SvgCirclePowerProps>(
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
      <path d="M3 0h1v1H3zM4 0h1v1H4zM5 0h1v1H5zM6 0h1v1H6zM7 0h1v1H7zM2 1h1v1H2zM8 1h1v1H8zM1 2h1v1H1zM5 2h1v1H5zM9 2h1v1H9zM0 3h1v1H0zM3 3h1v1H3zM5 3h1v1H5zM7 3h1v1H7zM10 3h1v1h-1zM0 4h1v1H0zM2 4h1v1H2zM5 4h1v1H5zM8 4h1v1H8zM10 4h1v1h-1zM0 5h1v1H0zM2 5h1v1H2zM8 5h1v1H8zM10 5h1v1h-1zM0 6h1v1H0zM2 6h1v1H2zM8 6h1v1H8zM10 6h1v1h-1zM0 7h1v1H0zM3 7h1v1H3zM7 7h1v1H7zM10 7h1v1h-1zM1 8h1v1H1zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM9 8h1v1H9zM2 9h1v1H2zM8 9h1v1H8zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgCirclePower.displayName = "SvgCirclePower";

export default SvgCirclePower;
