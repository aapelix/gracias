import * as React from "react";

interface SvgChevronsDownProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronsDown = React.forwardRef<SVGSVGElement, SvgChevronsDownProps>(
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
      <path d="M2 3h1v1H2zM8 3h1v1H8zM3 4h1v1H3zM7 4h1v1H7zM4 5h1v1H4zM6 5h1v1H6zM2 6h1v1H2zM5 6h1v1H5zM8 6h1v1H8zM3 7h1v1H3zM7 7h1v1H7zM4 8h1v1H4zM6 8h1v1H6zM5 9h1v1H5z" />
    </svg>
  )
);

SvgChevronsDown.displayName = "SvgChevronsDown";

export default SvgChevronsDown;
