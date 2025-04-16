import * as React from "react";

interface SvgDumbbellProps extends React.SVGAttributes<SVGElement> {}

const SvgDumbbell = React.forwardRef<SVGSVGElement, SvgDumbbellProps>(
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
      <path d="M2 0h1v1H2zM3 0h1v1H3zM5 0h1v1H5zM1 1h1v1H1zM4 1h1v1H4zM6 1h1v1H6zM0 2h1v1H0zM2 2h1v1H2zM5 2h1v1H5zM0 3h1v1H0zM3 3h1v1H3zM4 3h1v1H4zM1 4h1v1H1zM3 4h1v1H3zM4 4h1v1H4zM0 5h1v1H0zM2 5h1v1H2zM5 5h1v1H5zM10 5h1v1h-1zM1 6h1v1H1zM6 6h1v1H6zM9 6h1v1H9zM11 6h1v1h-1zM7 7h1v1H7zM8 7h1v1H8zM10 7h1v1h-1zM7 8h1v1H7zM8 8h1v1H8zM11 8h1v1h-1zM6 9h1v1H6zM9 9h1v1H9zM11 9h1v1h-1zM5 10h1v1H5zM7 10h1v1H7zM10 10h1v1h-1zM6 11h1v1H6zM8 11h1v1H8zM9 11h1v1H9z" />
    </svg>
  )
);

SvgDumbbell.displayName = "SvgDumbbell";

export default SvgDumbbell;
