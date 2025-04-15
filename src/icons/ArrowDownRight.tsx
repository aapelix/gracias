import * as React from "react";

interface SvgArrowDownRightProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowDownRight = React.forwardRef<SVGSVGElement, SvgArrowDownRightProps>(
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
      <path d="M3 3h1v1H3zM4 4h1v1H4zM9 4h1v1H9zM5 5h1v1H5zM9 5h1v1H9zM6 6h1v1H6zM9 6h1v1H9zM7 7h1v1H7zM9 7h1v1H9zM8 8h1v1H8zM9 8h1v1H9zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9z" />
    </svg>
  )
);

SvgArrowDownRight.displayName = "SvgArrowDownRight";

export default SvgArrowDownRight;
