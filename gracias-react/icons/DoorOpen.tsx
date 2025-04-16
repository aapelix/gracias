import * as React from "react";

interface SvgDoorOpenProps extends React.SVGAttributes<SVGElement> {}

const SvgDoorOpen = React.forwardRef<SVGSVGElement, SvgDoorOpenProps>(
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
      <path d="M4 0h1v1H4zM5 0h1v1H5zM6 0h1v1H6zM3 1h1v1H3zM6 1h1v1H6zM7 1h1v1H7zM2 2h1v1H2zM6 2h1v1H6zM8 2h1v1H8zM2 3h1v1H2zM6 3h1v1H6zM8 3h1v1H8zM2 4h1v1H2zM6 4h1v1H6zM8 4h1v1H8zM2 5h1v1H2zM6 5h1v1H6zM8 5h1v1H8zM2 6h1v1H2zM4 6h1v1H4zM6 6h1v1H6zM8 6h1v1H8zM2 7h1v1H2zM6 7h1v1H6zM8 7h1v1H8zM2 8h1v1H2zM6 8h1v1H6zM8 8h1v1H8zM2 9h1v1H2zM6 9h1v1H6zM8 9h1v1H8zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1zM4 11h1v1H4zM5 11h1v1H5z" />
    </svg>
  )
);

SvgDoorOpen.displayName = "SvgDoorOpen";

export default SvgDoorOpen;
