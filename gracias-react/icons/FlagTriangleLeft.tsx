import * as React from "react";

interface SvgFlagTriangleLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgFlagTriangleLeft = React.forwardRef<SVGSVGElement, SvgFlagTriangleLeftProps>(
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
      <path d="M7 1h1v1H7zM8 1h1v1H8zM5 2h1v1H5zM6 2h1v1H6zM8 2h1v1H8zM3 3h1v1H3zM4 3h1v1H4zM8 3h1v1H8zM5 4h1v1H5zM6 4h1v1H6zM8 4h1v1H8zM7 5h1v1H7zM8 5h1v1H8zM8 6h1v1H8zM8 7h1v1H8zM8 8h1v1H8zM8 9h1v1H8zM8 10h1v1H8z" />
    </svg>
  )
);

SvgFlagTriangleLeft.displayName = "SvgFlagTriangleLeft";

export default SvgFlagTriangleLeft;
