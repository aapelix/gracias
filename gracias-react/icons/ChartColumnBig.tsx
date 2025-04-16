import * as React from "react";

interface SvgChartColumnBigProps extends React.SVGAttributes<SVGElement> {}

const SvgChartColumnBig = React.forwardRef<SVGSVGElement, SvgChartColumnBigProps>(
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
      <path d="M1 1h1v1H1zM1 2h1v1H1zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM1 3h1v1H1zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM7 3h1v1H7zM9 3h1v1H9zM1 4h1v1H1zM3 4h1v1H3zM5 4h1v1H5zM7 4h1v1H7zM9 4h1v1H9zM1 5h1v1H1zM3 5h1v1H3zM5 5h1v1H5zM7 5h1v1H7zM9 5h1v1H9zM1 6h1v1H1zM3 6h1v1H3zM5 6h1v1H5zM7 6h1v1H7zM9 6h1v1H9zM1 7h1v1H1zM3 7h1v1H3zM5 7h1v1H5zM7 7h1v1H7zM9 7h1v1H9zM1 8h1v1H1zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM1 9h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgChartColumnBig.displayName = "SvgChartColumnBig";

export default SvgChartColumnBig;
