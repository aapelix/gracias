import * as React from "react";

interface SvgBrushProps extends React.SVGAttributes<SVGElement> {}

const SvgBrush = React.forwardRef<SVGSVGElement, SvgBrushProps>(
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
      <path d="M8 1h1v1H8zM9 1h1v1H9zM7 2h1v1H7zM10 2h1v1h-1zM6 3h1v1H6zM10 3h1v1h-1zM5 4h1v1H5zM9 4h1v1H9zM4 5h1v1H4zM8 5h1v1H8zM7 6h1v1H7zM2 7h1v1H2zM3 7h1v1H3zM6 7h1v1H6zM1 8h1v1H1zM4 8h1v1H4zM0 9h1v1H0zM4 9h1v1H4zM0 10h1v1H0zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3z" />
    </svg>
  )
);

SvgBrush.displayName = "SvgBrush";

export default SvgBrush;
