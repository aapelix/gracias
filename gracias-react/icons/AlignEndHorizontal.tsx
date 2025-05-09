import * as React from "react";

interface SvgAlignEndHorizontalProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignEndHorizontal = React.forwardRef<SVGSVGElement, SvgAlignEndHorizontalProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM2 2h1v1H2zM5 2h1v1H5zM2 3h1v1H2zM5 3h1v1H5zM2 4h1v1H2zM5 4h1v1H5zM8 4h1v1H8zM9 4h1v1H9zM2 5h1v1H2zM5 5h1v1H5zM7 5h1v1H7zM10 5h1v1h-1zM2 6h1v1H2zM5 6h1v1H5zM7 6h1v1H7zM10 6h1v1h-1zM2 7h1v1H2zM5 7h1v1H5zM7 7h1v1H7zM10 7h1v1h-1zM3 8h1v1H3zM4 8h1v1H4zM8 8h1v1H8zM9 8h1v1H9zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgAlignEndHorizontal.displayName = "SvgAlignEndHorizontal";

export default SvgAlignEndHorizontal;
