import * as React from "react";

interface SvgCheckProps extends React.SVGAttributes<SVGElement> {}

const SvgCheck = React.forwardRef<SVGSVGElement, SvgCheckProps>(
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
      <path d="M9 3h1v1H9zM8 4h1v1H8zM7 5h1v1H7zM2 6h1v1H2zM6 6h1v1H6zM3 7h1v1H3zM5 7h1v1H5zM4 8h1v1H4z" />
    </svg>
  )
);

SvgCheck.displayName = "SvgCheck";

export default SvgCheck;
