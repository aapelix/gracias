import * as React from "react";

interface SvgChartBarIncreasingProps extends React.SVGAttributes<SVGElement> {}

const SvgChartBarIncreasing = React.forwardRef<SVGSVGElement, SvgChartBarIncreasingProps>(
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
      <path d="M1 1h1v1H1zM1 2h1v1H1zM3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM1 3h1v1H1zM1 4h1v1H1zM1 5h1v1H1zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM1 6h1v1H1zM1 7h1v1H1zM1 8h1v1H1zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM1 9h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgChartBarIncreasing.displayName = "SvgChartBarIncreasing";

export default SvgChartBarIncreasing;
