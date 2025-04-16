import * as React from "react";

interface SvgCornerDownLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgCornerDownLeft = React.forwardRef<SVGSVGElement, SvgCornerDownLeftProps>(
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
      <path d="M9 2h1v1H9zM9 3h1v1H9zM9 4h1v1H9zM9 5h1v1H9zM3 6h1v1H3zM9 6h1v1H9zM2 7h1v1H2zM9 7h1v1H9zM1 8h1v1H1zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM2 9h1v1H2zM3 10h1v1H3z" />
    </svg>
  )
);

SvgCornerDownLeft.displayName = "SvgCornerDownLeft";

export default SvgCornerDownLeft;
