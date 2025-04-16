import * as React from "react";

interface SvgChevronsRightProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronsRight = React.forwardRef<SVGSVGElement, SvgChevronsRightProps>(
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
      <path d="M3 2h1v1H3zM6 2h1v1H6zM4 3h1v1H4zM7 3h1v1H7zM5 4h1v1H5zM8 4h1v1H8zM6 5h1v1H6zM9 5h1v1H9zM5 6h1v1H5zM8 6h1v1H8zM4 7h1v1H4zM7 7h1v1H7zM3 8h1v1H3zM6 8h1v1H6z" />
    </svg>
  )
);

SvgChevronsRight.displayName = "SvgChevronsRight";

export default SvgChevronsRight;
