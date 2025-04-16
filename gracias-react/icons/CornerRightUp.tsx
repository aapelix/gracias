import * as React from "react";

interface SvgCornerRightUpProps extends React.SVGAttributes<SVGElement> {}

const SvgCornerRightUp = React.forwardRef<SVGSVGElement, SvgCornerRightUpProps>(
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
      <path d="M8 1h1v1H8zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1h-1zM8 4h1v1H8zM8 5h1v1H8zM8 6h1v1H8zM8 7h1v1H8zM8 8h1v1H8zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7z" />
    </svg>
  )
);

SvgCornerRightUp.displayName = "SvgCornerRightUp";

export default SvgCornerRightUp;
