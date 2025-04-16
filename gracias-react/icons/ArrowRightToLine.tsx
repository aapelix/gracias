import * as React from "react";

interface SvgArrowRightToLineProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowRightToLine = React.forwardRef<SVGSVGElement, SvgArrowRightToLineProps>(
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
      <path d="M5 3h1v1H5zM10 3h1v1h-1zM6 4h1v1H6zM10 4h1v1h-1zM7 5h1v1H7zM10 5h1v1h-1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM10 6h1v1h-1zM7 7h1v1H7zM10 7h1v1h-1zM6 8h1v1H6zM10 8h1v1h-1zM5 9h1v1H5zM10 9h1v1h-1z" />
    </svg>
  )
);

SvgArrowRightToLine.displayName = "SvgArrowRightToLine";

export default SvgArrowRightToLine;
