import * as React from "react";

interface SvgChartNetworkProps extends React.SVGAttributes<SVGElement> {}

const SvgChartNetwork = React.forwardRef<SVGSVGElement, SvgChartNetworkProps>(
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
      <path d="M1 1h1v1H1zM1 2h1v1H1zM6 2h1v1H6zM9 2h1v1H9zM10 2h1v1h-1zM1 3h1v1H1zM5 3h1v1H5zM7 3h1v1H7zM8 3h1v1H8zM1 4h1v1H1zM6 4h1v1H6zM7 4h1v1H7zM1 5h1v1H1zM8 5h1v1H8zM1 6h1v1H1zM4 6h1v1H4zM7 6h1v1H7zM9 6h1v1H9zM1 7h1v1H1zM3 7h1v1H3zM5 7h1v1H5zM6 7h1v1H6zM8 7h1v1H8zM1 8h1v1H1zM4 8h1v1H4zM1 9h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgChartNetwork.displayName = "SvgChartNetwork";

export default SvgChartNetwork;
