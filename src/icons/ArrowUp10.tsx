import * as React from "react";

interface SvgArrowUp10Props extends React.SVGAttributes<SVGElement> {}

const SvgArrowUp10 = React.forwardRef<SVGSVGElement, SvgArrowUp10Props>(
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
      <path d="M7 1h1v1H7zM8 1h1v1H8zM3 2h1v1H3zM8 2h1v1H8zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM8 3h1v1H8zM1 4h1v1H1zM3 4h1v1H3zM5 4h1v1H5zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM3 5h1v1H3zM3 6h1v1H3zM8 6h1v1H8zM9 6h1v1H9zM3 7h1v1H3zM7 7h1v1H7zM10 7h1v1h-1zM3 8h1v1H3zM7 8h1v1H7zM10 8h1v1h-1zM3 9h1v1H3zM8 9h1v1H8zM9 9h1v1H9z" />
    </svg>
  )
);

SvgArrowUp10.displayName = "SvgArrowUp10";

export default SvgArrowUp10;
