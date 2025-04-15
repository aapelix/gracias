import * as React from "react";

interface SvgCandyCaneProps extends React.SVGAttributes<SVGElement> {}

const SvgCandyCane = React.forwardRef<SVGSVGElement, SvgCandyCaneProps>(
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
      <path d="M6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM5 2h1v1H5zM7 2h1v1H7zM10 2h1v1h-1zM4 3h1v1H4zM7 3h1v1H7zM8 3h1v1H8zM10 3h1v1h-1zM4 4h1v1H4zM6 4h1v1H6zM8 4h1v1H8zM10 4h1v1h-1zM3 5h1v1H3zM4 5h1v1H4zM6 5h1v1H6zM8 5h1v1H8zM9 5h1v1H9zM3 6h1v1H3zM5 6h1v1H5zM2 7h1v1H2zM3 7h1v1H3zM5 7h1v1H5zM2 8h1v1H2zM4 8h1v1H4zM1 9h1v1H1zM4 9h1v1H4zM2 10h1v1H2zM3 10h1v1H3z" />
    </svg>
  )
);

SvgCandyCane.displayName = "SvgCandyCane";

export default SvgCandyCane;
