import * as React from "react";

interface SvgChevronsLeftRightEllipsisProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronsLeftRightEllipsis = React.forwardRef<SVGSVGElement, SvgChevronsLeftRightEllipsisProps>(
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
      <path d="M2 3h1v1H2zM8 3h1v1H8zM1 4h1v1H1zM9 4h1v1H9zM0 5h1v1H0zM3 5h1v1H3zM5 5h1v1H5zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM9 6h1v1H9zM2 7h1v1H2zM8 7h1v1H8z" />
    </svg>
  )
);

SvgChevronsLeftRightEllipsis.displayName = "SvgChevronsLeftRightEllipsis";

export default SvgChevronsLeftRightEllipsis;
