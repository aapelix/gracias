import * as React from "react";

interface SvgDrillProps extends React.SVGAttributes<SVGElement> {}

const SvgDrill = React.forwardRef<SVGSVGElement, SvgDrillProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM1 2h1v1H1zM6 2h1v1H6zM7 2h1v1H7zM1 3h1v1H1zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM7 4h1v1H7zM3 5h1v1H3zM5 5h1v1H5zM7 5h1v1H7zM2 6h1v1H2zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM2 7h1v1H2zM4 7h1v1H4zM1 8h1v1H1zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM1 9h1v1H1zM5 9h1v1H5zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5z" />
    </svg>
  )
);

SvgDrill.displayName = "SvgDrill";

export default SvgDrill;
