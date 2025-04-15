import * as React from "react";

interface SvgArrowUpRightProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowUpRight = React.forwardRef<SVGSVGElement, SvgArrowUpRightProps>(
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
      <path d="M5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM8 3h1v1H8zM9 3h1v1H9zM7 4h1v1H7zM9 4h1v1H9zM6 5h1v1H6zM9 5h1v1H9zM5 6h1v1H5zM9 6h1v1H9zM4 7h1v1H4z" />
    </svg>
  )
);

SvgArrowUpRight.displayName = "SvgArrowUpRight";

export default SvgArrowUpRight;
