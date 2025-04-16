import * as React from "react";

interface SvgCrossProps extends React.SVGAttributes<SVGElement> {}

const SvgCross = React.forwardRef<SVGSVGElement, SvgCrossProps>(
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
      <path d="M5 1h1v1H5zM6 1h1v1H6zM4 2h1v1H4zM7 2h1v1H7zM4 3h1v1H4zM7 3h1v1H7zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM1 5h1v1H1zM10 5h1v1h-1zM1 6h1v1H1zM10 6h1v1h-1zM2 7h1v1H2zM3 7h1v1H3zM4 7h1v1H4zM7 7h1v1H7zM8 7h1v1H8zM9 7h1v1H9zM4 8h1v1H4zM7 8h1v1H7zM4 9h1v1H4zM7 9h1v1H7zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgCross.displayName = "SvgCross";

export default SvgCross;
