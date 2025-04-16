import * as React from "react";

interface SvgBedSingleProps extends React.SVGAttributes<SVGElement> {}

const SvgBedSingle = React.forwardRef<SVGSVGElement, SvgBedSingleProps>(
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
      <path d="M3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM2 3h1v1H2zM8 3h1v1H8zM2 4h1v1H2zM8 4h1v1H8zM2 5h1v1H2zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM1 6h1v1H1zM9 6h1v1H9zM1 7h1v1H1zM9 7h1v1H9zM1 8h1v1H1zM9 8h1v1H9zM1 9h1v1H1zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9zM1 10h1v1H1zM9 10h1v1H9z" />
    </svg>
  )
);

SvgBedSingle.displayName = "SvgBedSingle";

export default SvgBedSingle;
