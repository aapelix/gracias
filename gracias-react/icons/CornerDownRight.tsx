import * as React from "react";

interface SvgCornerDownRightProps extends React.SVGAttributes<SVGElement> {}

const SvgCornerDownRight = React.forwardRef<SVGSVGElement, SvgCornerDownRightProps>(
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
      <path d="M2 2h1v1H2zM2 3h1v1H2zM2 4h1v1H2zM2 5h1v1H2zM2 6h1v1H2zM8 6h1v1H8zM2 7h1v1H2zM9 7h1v1H9zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM10 8h1v1h-1zM9 9h1v1H9zM8 10h1v1H8z" />
    </svg>
  )
);

SvgCornerDownRight.displayName = "SvgCornerDownRight";

export default SvgCornerDownRight;
