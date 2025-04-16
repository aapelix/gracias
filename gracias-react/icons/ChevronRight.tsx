import * as React from "react";

interface SvgChevronRightProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronRight = React.forwardRef<SVGSVGElement, SvgChevronRightProps>(
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
      <path d="M4 2h1v1H4zM5 3h1v1H5zM6 4h1v1H6zM7 5h1v1H7zM6 6h1v1H6zM5 7h1v1H5zM4 8h1v1H4z" />
    </svg>
  )
);

SvgChevronRight.displayName = "SvgChevronRight";

export default SvgChevronRight;
