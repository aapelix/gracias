import * as React from "react";

interface SvgDisc3Props extends React.SVGAttributes<SVGElement> {}

const SvgDisc3 = React.forwardRef<SVGSVGElement, SvgDisc3Props>(
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
      <path d="M4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM3 2h1v1H3zM8 2h1v1H8zM2 3h1v1H2zM4 3h1v1H4zM9 3h1v1H9zM1 4h1v1H1zM3 4h1v1H3zM5 4h1v1H5zM6 4h1v1H6zM10 4h1v1h-1zM1 5h1v1H1zM4 5h1v1H4zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM7 6h1v1H7zM10 6h1v1h-1zM1 7h1v1H1zM5 7h1v1H5zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM2 8h1v1H2zM7 8h1v1H7zM9 8h1v1H9zM3 9h1v1H3zM8 9h1v1H8zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgDisc3.displayName = "SvgDisc3";

export default SvgDisc3;
