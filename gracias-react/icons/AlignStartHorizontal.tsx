import * as React from "react";

interface SvgAlignStartHorizontalProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignStartHorizontal = React.forwardRef<SVGSVGElement, SvgAlignStartHorizontalProps>(
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
      <path d="M1 1h1v1H1zM2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM10 1h1v1h-1zM2 3h1v1H2zM3 3h1v1H3zM7 3h1v1H7zM8 3h1v1H8zM1 4h1v1H1zM4 4h1v1H4zM6 4h1v1H6zM9 4h1v1H9zM1 5h1v1H1zM4 5h1v1H4zM6 5h1v1H6zM9 5h1v1H9zM1 6h1v1H1zM4 6h1v1H4zM6 6h1v1H6zM9 6h1v1H9zM1 7h1v1H1zM4 7h1v1H4zM6 7h1v1H6zM9 7h1v1H9zM1 8h1v1H1zM4 8h1v1H4zM7 8h1v1H7zM8 8h1v1H8zM1 9h1v1H1zM4 9h1v1H4zM2 10h1v1H2zM3 10h1v1H3z" />
    </svg>
  )
);

SvgAlignStartHorizontal.displayName = "SvgAlignStartHorizontal";

export default SvgAlignStartHorizontal;
