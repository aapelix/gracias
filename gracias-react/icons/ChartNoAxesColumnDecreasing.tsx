import * as React from "react";

interface SvgChartNoAxesColumnDecreasingProps extends React.SVGAttributes<SVGElement> {}

const SvgChartNoAxesColumnDecreasing = React.forwardRef<SVGSVGElement, SvgChartNoAxesColumnDecreasingProps>(
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
      <path d="M2 2h1v1H2zM2 3h1v1H2zM2 4h1v1H2zM2 5h1v1H2zM5 5h1v1H5zM2 6h1v1H2zM5 6h1v1H5zM2 7h1v1H2zM5 7h1v1H5zM8 7h1v1H8zM2 8h1v1H2zM5 8h1v1H5zM8 8h1v1H8zM2 9h1v1H2zM5 9h1v1H5zM8 9h1v1H8zM2 10h1v1H2zM5 10h1v1H5zM8 10h1v1H8z" />
    </svg>
  )
);

SvgChartNoAxesColumnDecreasing.displayName = "SvgChartNoAxesColumnDecreasing";

export default SvgChartNoAxesColumnDecreasing;
