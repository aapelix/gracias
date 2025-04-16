import * as React from "react";

interface SvgCheckCheckProps extends React.SVGAttributes<SVGElement> {}

const SvgCheckCheck = React.forwardRef<SVGSVGElement, SvgCheckCheckProps>(
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
      <path d="M8 3h1v1H8zM7 4h1v1H7zM6 5h1v1H6zM10 5h1v1h-1zM1 6h1v1H1zM5 6h1v1H5zM9 6h1v1H9zM2 7h1v1H2zM4 7h1v1H4zM6 7h1v1H6zM8 7h1v1H8zM3 8h1v1H3zM7 8h1v1H7z" />
    </svg>
  )
);

SvgCheckCheck.displayName = "SvgCheckCheck";

export default SvgCheckCheck;
