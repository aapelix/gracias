import * as React from "react";

interface SvgFileChartPieProps extends React.SVGAttributes<SVGElement> {}

const SvgFileChartPie = React.forwardRef<SVGSVGElement, SvgFileChartPieProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM2 2h1v1H2zM6 2h1v1H6zM7 2h1v1H7zM2 3h1v1H2zM6 3h1v1H6zM8 3h1v1H8zM2 4h1v1H2zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM4 5h1v1H4zM9 5h1v1H9zM2 6h1v1H2zM4 6h1v1H4zM5 6h1v1H5zM9 6h1v1H9zM1 7h1v1H1zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM9 7h1v1H9zM0 8h1v1H0zM9 8h1v1H9zM0 9h1v1H0zM5 9h1v1H5zM9 9h1v1H9zM1 10h1v1H1zM4 10h1v1H4zM7 10h1v1H7zM8 10h1v1H8zM2 11h1v1H2zM3 11h1v1H3z" />
    </svg>
  )
);

SvgFileChartPie.displayName = "SvgFileChartPie";

export default SvgFileChartPie;
