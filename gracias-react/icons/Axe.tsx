import * as React from "react";

interface SvgAxeProps extends React.SVGAttributes<SVGElement> {}

const SvgAxe = React.forwardRef<SVGSVGElement, SvgAxeProps>(
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
      <path d="M6 1h1v1H6zM5 2h1v1H5zM7 2h1v1H7zM4 3h1v1H4zM8 3h1v1H8zM5 4h1v1H5zM9 4h1v1H9zM10 4h1v1h-1zM4 5h1v1H4zM6 5h1v1H6zM11 5h1v1h-1zM3 6h1v1H3zM7 6h1v1H7zM11 6h1v1h-1zM2 7h1v1H2zM6 7h1v1H6zM7 7h1v1H7zM10 7h1v1h-1zM1 8h1v1H1zM5 8h1v1H5zM8 8h1v1H8zM9 8h1v1H9zM1 9h1v1H1zM4 9h1v1H4zM2 10h1v1H2zM3 10h1v1H3z" />
    </svg>
  )
);

SvgAxe.displayName = "SvgAxe";

export default SvgAxe;
