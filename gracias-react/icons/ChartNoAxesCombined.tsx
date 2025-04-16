import * as React from "react";

interface SvgChartNoAxesCombinedProps extends React.SVGAttributes<SVGElement> {}

const SvgChartNoAxesCombined = React.forwardRef<SVGSVGElement, SvgChartNoAxesCombinedProps>(
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
      <path d="M10 2h1v1h-1zM9 3h1v1H9zM4 4h1v1H4zM8 4h1v1H8zM3 5h1v1H3zM5 5h1v1H5zM7 5h1v1H7zM10 5h1v1h-1zM2 6h1v1H2zM6 6h1v1H6zM10 6h1v1h-1zM1 7h1v1H1zM4 7h1v1H4zM8 7h1v1H8zM10 7h1v1h-1zM4 8h1v1H4zM6 8h1v1H6zM8 8h1v1H8zM10 8h1v1h-1zM2 9h1v1H2zM4 9h1v1H4zM6 9h1v1H6zM8 9h1v1H8zM10 9h1v1h-1zM2 10h1v1H2zM4 10h1v1H4zM6 10h1v1H6zM8 10h1v1H8zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgChartNoAxesCombined.displayName = "SvgChartNoAxesCombined";

export default SvgChartNoAxesCombined;
