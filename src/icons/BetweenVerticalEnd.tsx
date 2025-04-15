import * as React from "react";

interface SvgBetweenVerticalEndProps extends React.SVGAttributes<SVGElement> {}

const SvgBetweenVerticalEnd = React.forwardRef<SVGSVGElement, SvgBetweenVerticalEndProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM7 1h1v1H7zM8 1h1v1H8zM1 2h1v1H1zM4 2h1v1H4zM6 2h1v1H6zM9 2h1v1H9zM1 3h1v1H1zM4 3h1v1H4zM6 3h1v1H6zM9 3h1v1H9zM1 4h1v1H1zM4 4h1v1H4zM6 4h1v1H6zM9 4h1v1H9zM1 5h1v1H1zM4 5h1v1H4zM6 5h1v1H6zM9 5h1v1H9zM2 6h1v1H2zM3 6h1v1H3zM7 6h1v1H7zM8 6h1v1H8zM5 8h1v1H5zM4 9h1v1H4zM6 9h1v1H6z" />
    </svg>
  )
);

SvgBetweenVerticalEnd.displayName = "SvgBetweenVerticalEnd";

export default SvgBetweenVerticalEnd;
