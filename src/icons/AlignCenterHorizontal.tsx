import * as React from "react";

interface SvgAlignCenterHorizontalProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignCenterHorizontal = React.forwardRef<SVGSVGElement, SvgAlignCenterHorizontalProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM2 2h1v1H2zM5 2h1v1H5zM8 2h1v1H8zM9 2h1v1H9zM2 3h1v1H2zM5 3h1v1H5zM7 3h1v1H7zM10 3h1v1h-1zM2 4h1v1H2zM5 4h1v1H5zM7 4h1v1H7zM10 4h1v1h-1zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM9 6h1v1H9zM10 6h1v1h-1zM2 8h1v1H2zM5 8h1v1H5zM7 8h1v1H7zM10 8h1v1h-1zM2 9h1v1H2zM5 9h1v1H5zM7 9h1v1H7zM10 9h1v1h-1zM2 10h1v1H2zM5 10h1v1H5zM8 10h1v1H8zM9 10h1v1H9zM3 11h1v1H3zM4 11h1v1H4z" />
    </svg>
  )
);

SvgAlignCenterHorizontal.displayName = "SvgAlignCenterHorizontal";

export default SvgAlignCenterHorizontal;
