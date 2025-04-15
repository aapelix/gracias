import * as React from "react";

interface SvgAlignVerticalDistributeCenterProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignVerticalDistributeCenter = React.forwardRef<SVGSVGElement, SvgAlignVerticalDistributeCenterProps>(
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
      <path d="M4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM1 2h1v1H1zM2 2h1v1H2zM3 2h1v1H3zM8 2h1v1H8zM9 2h1v1H9zM10 2h1v1h-1zM3 3h1v1H3zM8 3h1v1H8zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM7 4h1v1H7zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM1 7h1v1H1zM2 7h1v1H2zM9 7h1v1H9zM10 7h1v1h-1zM2 8h1v1H2zM9 8h1v1H9zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8z" />
    </svg>
  )
);

SvgAlignVerticalDistributeCenter.displayName = "SvgAlignVerticalDistributeCenter";

export default SvgAlignVerticalDistributeCenter;
