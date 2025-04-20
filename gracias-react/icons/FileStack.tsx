import * as React from "react";

interface SvgFileStackProps extends React.SVGAttributes<SVGElement> {}

const SvgFileStack = React.forwardRef<SVGSVGElement, SvgFileStackProps>(
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
      <path d="M6 0h1v1H6zM7 0h1v1H7zM8 0h1v1H8zM5 1h1v1H5zM8 1h1v1H8zM9 1h1v1H9zM3 2h1v1H3zM5 2h1v1H5zM8 2h1v1H8zM9 2h1v1H9zM10 2h1v1h-1zM3 3h1v1H3zM5 3h1v1H5zM10 3h1v1h-1zM1 4h1v1H1zM3 4h1v1H3zM5 4h1v1H5zM10 4h1v1h-1zM1 5h1v1H1zM3 5h1v1H3zM5 5h1v1H5zM10 5h1v1h-1zM1 6h1v1H1zM3 6h1v1H3zM5 6h1v1H5zM10 6h1v1h-1zM1 7h1v1H1zM3 7h1v1H3zM6 7h1v1H6zM7 7h1v1H7zM8 7h1v1H8zM9 7h1v1H9zM1 8h1v1H1zM3 8h1v1H3zM1 9h1v1H1zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM1 10h1v1H1zM2 11h1v1H2zM3 11h1v1H3zM4 11h1v1H4zM5 11h1v1H5zM6 11h1v1H6z" />
    </svg>
  )
);

SvgFileStack.displayName = "SvgFileStack";

export default SvgFileStack;
