import * as React from "react";

interface SvgBetweenVerticalStartProps extends React.SVGAttributes<SVGElement> {}

const SvgBetweenVerticalStart = React.forwardRef<SVGSVGElement, SvgBetweenVerticalStartProps>(
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
      <path d="M4 2h1v1H4zM6 2h1v1H6zM5 3h1v1H5zM2 5h1v1H2zM3 5h1v1H3zM7 5h1v1H7zM8 5h1v1H8zM1 6h1v1H1zM4 6h1v1H4zM6 6h1v1H6zM9 6h1v1H9zM1 7h1v1H1zM4 7h1v1H4zM6 7h1v1H6zM9 7h1v1H9zM1 8h1v1H1zM4 8h1v1H4zM6 8h1v1H6zM9 8h1v1H9zM1 9h1v1H1zM4 9h1v1H4zM6 9h1v1H6zM9 9h1v1H9zM2 10h1v1H2zM3 10h1v1H3zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgBetweenVerticalStart.displayName = "SvgBetweenVerticalStart";

export default SvgBetweenVerticalStart;
