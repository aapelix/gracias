import * as React from "react";

interface SvgBlindsProps extends React.SVGAttributes<SVGElement> {}

const SvgBlinds = React.forwardRef<SVGSVGElement, SvgBlindsProps>(
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
      <path d="M1 1h1v1H1zM2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM10 1h1v1h-1zM2 2h1v1H2zM2 3h1v1H2zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM2 4h1v1H2zM2 5h1v1H2zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM2 6h1v1H2zM2 7h1v1H2zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM8 7h1v1H8zM9 7h1v1H9zM2 8h1v1H2zM1 9h1v1H1zM3 9h1v1H3zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9zM2 10h1v1H2z" />
    </svg>
  )
);

SvgBlinds.displayName = "SvgBlinds";

export default SvgBlinds;
