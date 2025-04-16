import * as React from "react";

interface SvgCircleSmallProps extends React.SVGAttributes<SVGElement> {}

const SvgCircleSmall = React.forwardRef<SVGSVGElement, SvgCircleSmallProps>(
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
      <path d="M4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM3 3h1v1H3zM7 3h1v1H7zM2 4h1v1H2zM8 4h1v1H8zM2 5h1v1H2zM8 5h1v1H8zM2 6h1v1H2zM8 6h1v1H8zM3 7h1v1H3zM7 7h1v1H7zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6z" />
    </svg>
  )
);

SvgCircleSmall.displayName = "SvgCircleSmall";

export default SvgCircleSmall;
