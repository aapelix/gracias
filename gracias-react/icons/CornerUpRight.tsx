import * as React from "react";

interface SvgCornerUpRightProps extends React.SVGAttributes<SVGElement> {}

const SvgCornerUpRight = React.forwardRef<SVGSVGElement, SvgCornerUpRightProps>(
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
      <path d="M8 1h1v1H8zM9 2h1v1H9zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM10 3h1v1h-1zM2 4h1v1H2zM9 4h1v1H9zM2 5h1v1H2zM8 5h1v1H8zM2 6h1v1H2zM2 7h1v1H2zM2 8h1v1H2zM2 9h1v1H2z" />
    </svg>
  )
);

SvgCornerUpRight.displayName = "SvgCornerUpRight";

export default SvgCornerUpRight;
