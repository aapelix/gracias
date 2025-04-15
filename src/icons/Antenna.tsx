import * as React from "react";

interface SvgAntennaProps extends React.SVGAttributes<SVGElement> {}

const SvgAntenna = React.forwardRef<SVGSVGElement, SvgAntennaProps>(
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
      <path d="M3 1h1v1H3zM5 1h1v1H5zM7 1h1v1H7zM9 1h1v1H9zM3 2h1v1H3zM5 2h1v1H5zM7 2h1v1H7zM9 2h1v1H9zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM1 4h1v1H1zM3 4h1v1H3zM5 4h1v1H5zM7 4h1v1H7zM1 5h1v1H1zM3 5h1v1H3zM5 5h1v1H5zM7 5h1v1H7zM5 7h1v1H5zM5 8h1v1H5zM5 9h1v1H5z" />
    </svg>
  )
);

SvgAntenna.displayName = "SvgAntenna";

export default SvgAntenna;
