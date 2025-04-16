import * as React from "react";

interface SvgCornerLeftUpProps extends React.SVGAttributes<SVGElement> {}

const SvgCornerLeftUp = React.forwardRef<SVGSVGElement, SvgCornerLeftUpProps>(
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
      <path d="M3 1h1v1H3zM2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM1 3h1v1H1zM3 3h1v1H3zM5 3h1v1H5zM3 4h1v1H3zM3 5h1v1H3zM3 6h1v1H3zM3 7h1v1H3zM3 8h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9z" />
    </svg>
  )
);

SvgCornerLeftUp.displayName = "SvgCornerLeftUp";

export default SvgCornerLeftUp;
