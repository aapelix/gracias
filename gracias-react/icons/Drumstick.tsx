import * as React from "react";

interface SvgDrumstickProps extends React.SVGAttributes<SVGElement> {}

const SvgDrumstick = React.forwardRef<SVGSVGElement, SvgDrumstickProps>(
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
      <path d="M7 0h1v1H7zM8 0h1v1H8zM9 0h1v1H9zM6 1h1v1H6zM10 1h1v1h-1zM5 2h1v1H5zM11 2h1v1h-1zM4 3h1v1H4zM9 3h1v1H9zM10 3h1v1h-1zM3 4h1v1H3zM8 4h1v1H8zM3 5h1v1H3zM7 5h1v1H7zM3 6h1v1H3zM4 6h1v1H4zM7 6h1v1H7zM1 7h1v1H1zM2 7h1v1H2zM5 7h1v1H5zM7 7h1v1H7zM1 8h1v1H1zM5 8h1v1H5zM6 8h1v1H6zM1 9h1v1H1zM2 9h1v1H2zM4 9h1v1H4zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4z" />
    </svg>
  )
);

SvgDrumstick.displayName = "SvgDrumstick";

export default SvgDrumstick;
