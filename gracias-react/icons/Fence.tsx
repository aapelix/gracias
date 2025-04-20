import * as React from "react";

interface SvgFenceProps extends React.SVGAttributes<SVGElement> {}

const SvgFence = React.forwardRef<SVGSVGElement, SvgFenceProps>(
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
      <path d="M1 1h1v1H1zM5 1h1v1H5zM9 1h1v1H9zM0 2h1v1H0zM2 2h1v1H2zM4 2h1v1H4zM6 2h1v1H6zM8 2h1v1H8zM10 2h1v1h-1zM0 3h1v1H0zM2 3h1v1H2zM4 3h1v1H4zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1h-1zM0 4h1v1H0zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM10 4h1v1h-1zM0 5h1v1H0zM2 5h1v1H2zM4 5h1v1H4zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1h-1zM0 6h1v1H0zM2 6h1v1H2zM4 6h1v1H4zM6 6h1v1H6zM8 6h1v1H8zM10 6h1v1h-1zM0 7h1v1H0zM2 7h1v1H2zM4 7h1v1H4zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM0 8h1v1H0zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM10 8h1v1h-1zM0 9h1v1H0zM2 9h1v1H2zM4 9h1v1H4zM6 9h1v1H6zM8 9h1v1H8zM10 9h1v1h-1zM0 10h1v1H0zM1 10h1v1H1zM2 10h1v1H2zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgFence.displayName = "SvgFence";

export default SvgFence;
