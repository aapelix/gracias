import * as React from "react";

interface SvgChartLineProps extends React.SVGAttributes<SVGElement> {}

const SvgChartLine = React.forwardRef<SVGSVGElement, SvgChartLineProps>(
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
      <path d="M1 1h1v1H1zM1 2h1v1H1zM1 3h1v1H1zM1 4h1v1H1zM10 4h1v1h-1zM1 5h1v1H1zM5 5h1v1H5zM9 5h1v1H9zM1 6h1v1H1zM4 6h1v1H4zM6 6h1v1H6zM8 6h1v1H8zM1 7h1v1H1zM3 7h1v1H3zM7 7h1v1H7zM1 8h1v1H1zM1 9h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgChartLine.displayName = "SvgChartLine";

export default SvgChartLine;
