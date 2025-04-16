import * as React from "react";

interface SvgDotProps extends React.SVGAttributes<SVGElement> {}

const SvgDot = React.forwardRef<SVGSVGElement, SvgDotProps>(
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
      <path d="M5 5h1v1H5zM6 5h1v1H6zM5 6h1v1H5zM6 6h1v1H6z" />
    </svg>
  )
);

SvgDot.displayName = "SvgDot";

export default SvgDot;
