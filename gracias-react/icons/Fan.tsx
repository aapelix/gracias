import * as React from "react";

interface SvgFanProps extends React.SVGAttributes<SVGElement> {}

const SvgFan = React.forwardRef<SVGSVGElement, SvgFanProps>(
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
      <path d="M4 0h1v1H4zM5 0h1v1H5zM6 0h1v1H6zM7 0h1v1H7zM3 1h1v1H3zM7 1h1v1H7zM3 2h1v1H3zM6 2h1v1H6zM0 3h1v1H0zM1 3h1v1H1zM3 3h1v1H3zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM0 4h1v1H0zM2 4h1v1H2zM3 4h1v1H3zM10 4h1v1h-1zM0 5h1v1H0zM5 5h1v1H5zM10 5h1v1h-1zM0 6h1v1H0zM7 6h1v1H7zM8 6h1v1H8zM10 6h1v1h-1zM1 7h1v1H1zM2 7h1v1H2zM3 7h1v1H3zM4 7h1v1H4zM7 7h1v1H7zM9 7h1v1H9zM10 7h1v1h-1zM4 8h1v1H4zM7 8h1v1H7zM3 9h1v1H3zM7 9h1v1H7zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgFan.displayName = "SvgFan";

export default SvgFan;
