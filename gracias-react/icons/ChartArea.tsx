import * as React from "react";

interface SvgChartAreaProps extends React.SVGAttributes<SVGElement> {}

const SvgChartArea = React.forwardRef<SVGSVGElement, SvgChartAreaProps>(
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
      <path d="M1 1h1v1H1zM1 2h1v1H1zM10 2h1v1h-1zM1 3h1v1H1zM5 3h1v1H5zM9 3h1v1H9zM10 3h1v1h-1zM1 4h1v1H1zM4 4h1v1H4zM6 4h1v1H6zM8 4h1v1H8zM10 4h1v1h-1zM1 5h1v1H1zM3 5h1v1H3zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM3 6h1v1H3zM10 6h1v1h-1zM1 7h1v1H1zM3 7h1v1H3zM10 7h1v1h-1zM1 8h1v1H1zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM1 9h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgChartArea.displayName = "SvgChartArea";

export default SvgChartArea;
