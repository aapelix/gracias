import * as React from "react";

interface SvgCandyOffProps extends React.SVGAttributes<SVGElement> {}

const SvgCandyOff = React.forwardRef<SVGSVGElement, SvgCandyOffProps>(
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
      <path d="M1 1h1v1H1zM6 1h1v1H6zM7 1h1v1H7zM2 2h1v1H2zM6 2h1v1H6zM8 2h1v1H8zM9 2h1v1H9zM3 3h1v1H3zM6 3h1v1H6zM9 3h1v1H9zM4 4h1v1H4zM7 4h1v1H7zM10 4h1v1h-1zM3 5h1v1H3zM5 5h1v1H5zM8 5h1v1H8zM9 5h1v1H9zM10 5h1v1h-1zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM5 6h1v1H5zM6 6h1v1H6zM1 7h1v1H1zM4 7h1v1H4zM5 7h1v1H5zM7 7h1v1H7zM2 8h1v1H2zM5 8h1v1H5zM6 8h1v1H6zM8 8h1v1H8zM2 9h1v1H2zM3 9h1v1H3zM5 9h1v1H5zM9 9h1v1H9zM4 10h1v1H4zM5 10h1v1H5zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgCandyOff.displayName = "SvgCandyOff";

export default SvgCandyOff;
