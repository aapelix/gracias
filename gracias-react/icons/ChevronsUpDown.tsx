import * as React from "react";

interface SvgChevronsUpDownProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronsUpDown = React.forwardRef<SVGSVGElement, SvgChevronsUpDownProps>(
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
      <path d="M5 1h1v1H5zM4 2h1v1H4zM6 2h1v1H6zM3 3h1v1H3zM7 3h1v1H7zM2 4h1v1H2zM8 4h1v1H8zM2 7h1v1H2zM8 7h1v1H8zM3 8h1v1H3zM7 8h1v1H7zM4 9h1v1H4zM6 9h1v1H6zM5 10h1v1H5z" />
    </svg>
  )
);

SvgChevronsUpDown.displayName = "SvgChevronsUpDown";

export default SvgChevronsUpDown;
