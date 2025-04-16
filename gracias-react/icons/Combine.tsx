import * as React from "react";

interface SvgCombineProps extends React.SVGAttributes<SVGElement> {}

const SvgCombine = React.forwardRef<SVGSVGElement, SvgCombineProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM6 1h1v1H6zM9 1h1v1H9zM1 2h1v1H1zM4 2h1v1H4zM7 2h1v1H7zM10 2h1v1h-1zM1 3h1v1H1zM4 3h1v1H4zM7 3h1v1H7zM10 3h1v1h-1zM2 4h1v1H2zM3 4h1v1H3zM6 4h1v1H6zM9 4h1v1H9zM2 6h1v1H2zM2 7h1v1H2zM8 7h1v1H8zM9 7h1v1H9zM2 8h1v1H2zM4 8h1v1H4zM7 8h1v1H7zM10 8h1v1h-1zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM7 9h1v1H7zM10 9h1v1h-1zM4 10h1v1H4zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgCombine.displayName = "SvgCombine";

export default SvgCombine;
