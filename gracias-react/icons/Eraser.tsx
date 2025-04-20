import * as React from "react";

interface SvgEraserProps extends React.SVGAttributes<SVGElement> {}

const SvgEraser = React.forwardRef<SVGSVGElement, SvgEraserProps>(
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
      <path d="M6 2h1v1H6zM5 3h1v1H5zM7 3h1v1H7zM4 4h1v1H4zM8 4h1v1H8zM3 5h1v1H3zM9 5h1v1H9zM2 6h1v1H2zM4 6h1v1H4zM8 6h1v1H8zM1 7h1v1H1zM5 7h1v1H5zM7 7h1v1H7zM2 8h1v1H2zM6 8h1v1H6zM3 9h1v1H3zM5 9h1v1H5zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgEraser.displayName = "SvgEraser";

export default SvgEraser;
