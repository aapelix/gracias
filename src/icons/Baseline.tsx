import * as React from "react";

interface SvgBaselineProps extends React.SVGAttributes<SVGElement> {}

const SvgBaseline = React.forwardRef<SVGSVGElement, SvgBaselineProps>(
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
      <path d="M5 1h1v1H5zM5 2h1v1H5zM4 3h1v1H4zM6 3h1v1H6zM4 4h1v1H4zM6 4h1v1H6zM3 5h1v1H3zM7 5h1v1H7zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM2 7h1v1H2zM8 7h1v1H8zM2 8h1v1H2zM8 8h1v1H8zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgBaseline.displayName = "SvgBaseline";

export default SvgBaseline;
