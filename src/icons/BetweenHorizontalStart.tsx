import * as React from "react";

interface SvgBetweenHorizontalStartProps extends React.SVGAttributes<SVGElement> {}

const SvgBetweenHorizontalStart = React.forwardRef<SVGSVGElement, SvgBetweenHorizontalStartProps>(
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
      <path d="M6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM5 3h1v1H5zM10 3h1v1h-1zM5 4h1v1H5zM10 4h1v1h-1zM2 5h1v1H2zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM3 6h1v1H3zM2 7h1v1H2zM6 7h1v1H6zM7 7h1v1H7zM8 7h1v1H8zM9 7h1v1H9zM5 8h1v1H5zM10 8h1v1h-1zM5 9h1v1H5zM10 9h1v1h-1zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgBetweenHorizontalStart.displayName = "SvgBetweenHorizontalStart";

export default SvgBetweenHorizontalStart;
