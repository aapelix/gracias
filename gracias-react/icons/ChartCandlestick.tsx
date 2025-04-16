import * as React from "react";

interface SvgChartCandlestickProps extends React.SVGAttributes<SVGElement> {}

const SvgChartCandlestick = React.forwardRef<SVGSVGElement, SvgChartCandlestickProps>(
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
      <path d="M1 1h1v1H1zM1 2h1v1H1zM4 2h1v1H4zM8 2h1v1H8zM1 3h1v1H1zM4 3h1v1H4zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM1 4h1v1H1zM3 4h1v1H3zM4 4h1v1H4zM5 4h1v1H5zM7 4h1v1H7zM9 4h1v1H9zM1 5h1v1H1zM3 5h1v1H3zM5 5h1v1H5zM7 5h1v1H7zM9 5h1v1H9zM1 6h1v1H1zM3 6h1v1H3zM5 6h1v1H5zM7 6h1v1H7zM8 6h1v1H8zM9 6h1v1H9zM1 7h1v1H1zM3 7h1v1H3zM4 7h1v1H4zM5 7h1v1H5zM8 7h1v1H8zM1 8h1v1H1zM4 8h1v1H4zM8 8h1v1H8zM1 9h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgChartCandlestick.displayName = "SvgChartCandlestick";

export default SvgChartCandlestick;
