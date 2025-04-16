import * as React from "react";

interface SvgCornerRightDownProps extends React.SVGAttributes<SVGElement> {}

const SvgCornerRightDown = React.forwardRef<SVGSVGElement, SvgCornerRightDownProps>(
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
      <path d="M2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM8 3h1v1H8zM8 4h1v1H8zM8 5h1v1H8zM8 6h1v1H8zM8 7h1v1H8zM6 8h1v1H6zM8 8h1v1H8zM10 8h1v1h-1zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9zM8 10h1v1H8z" />
    </svg>
  )
);

SvgCornerRightDown.displayName = "SvgCornerRightDown";

export default SvgCornerRightDown;
