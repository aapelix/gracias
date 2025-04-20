import * as React from "react";

interface SvgFlameKindlingProps extends React.SVGAttributes<SVGElement> {}

const SvgFlameKindling = React.forwardRef<SVGSVGElement, SvgFlameKindlingProps>(
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
      <path d="M5 0h1v1H5zM5 1h1v1H5zM6 1h1v1H6zM5 2h1v1H5zM6 2h1v1H6zM3 3h1v1H3zM5 3h1v1H5zM7 3h1v1H7zM2 4h1v1H2zM4 4h1v1H4zM5 4h1v1H5zM8 4h1v1H8zM2 5h1v1H2zM8 5h1v1H8zM2 6h1v1H2zM8 6h1v1H8zM3 7h1v1H3zM7 7h1v1H7zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM1 9h1v1H1zM2 9h1v1H2zM8 9h1v1H8zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM1 11h1v1H1zM2 11h1v1H2zM8 11h1v1H8zM9 11h1v1H9z" />
    </svg>
  )
);

SvgFlameKindling.displayName = "SvgFlameKindling";

export default SvgFlameKindling;
