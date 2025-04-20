import * as React from "react";

interface SvgEqualProps extends React.SVGAttributes<SVGElement> {}

const SvgEqual = React.forwardRef<SVGSVGElement, SvgEqualProps>(
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
      <path d="M2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM2 7h1v1H2zM3 7h1v1H3zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM8 7h1v1H8zM9 7h1v1H9z" />
    </svg>
  )
);

SvgEqual.displayName = "SvgEqual";

export default SvgEqual;
