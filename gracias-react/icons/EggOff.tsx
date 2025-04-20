import * as React from "react";

interface SvgEggOffProps extends React.SVGAttributes<SVGElement> {}

const SvgEggOff = React.forwardRef<SVGSVGElement, SvgEggOffProps>(
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
      <path d="M1 1h1v1H1zM5 1h1v1H5zM6 1h1v1H6zM2 2h1v1H2zM7 2h1v1H7zM3 3h1v1H3zM8 3h1v1H8zM3 4h1v1H3zM4 4h1v1H4zM8 4h1v1H8zM2 5h1v1H2zM5 5h1v1H5zM9 5h1v1H9zM2 6h1v1H2zM6 6h1v1H6zM9 6h1v1H9zM2 7h1v1H2zM7 7h1v1H7zM2 8h1v1H2zM8 8h1v1H8zM3 9h1v1H3zM8 9h1v1H8zM9 9h1v1H9zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgEggOff.displayName = "SvgEggOff";

export default SvgEggOff;
