import * as React from "react";

interface SvgBrainCogProps extends React.SVGAttributes<SVGElement> {}

const SvgBrainCog = React.forwardRef<SVGSVGElement, SvgBrainCogProps>(
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
      <path d="M4 0h1v1H4zM8 0h1v1H8zM3 1h1v1H3zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM9 1h1v1H9zM2 2h1v1H2zM3 2h1v1H3zM9 2h1v1H9zM10 2h1v1h-1zM2 3h1v1H2zM4 3h1v1H4zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1h-1zM1 4h1v1H1zM6 4h1v1H6zM11 4h1v1h-1zM1 5h1v1H1zM2 5h1v1H2zM4 5h1v1H4zM5 5h1v1H5zM7 5h1v1H7zM10 5h1v1h-1zM11 5h1v1h-1zM1 6h1v1H1zM5 6h1v1H5zM7 6h1v1H7zM8 6h1v1H8zM11 6h1v1h-1zM1 7h1v1H1zM6 7h1v1H6zM11 7h1v1h-1zM2 8h1v1H2zM3 8h1v1H3zM9 8h1v1H9zM10 8h1v1h-1zM11 8h1v1h-1zM2 9h1v1H2zM6 9h1v1H6zM10 9h1v1h-1zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgBrainCog.displayName = "SvgBrainCog";

export default SvgBrainCog;
