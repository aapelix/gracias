import * as React from "react";

interface SvgDeleteProps extends React.SVGAttributes<SVGElement> {}

const SvgDelete = React.forwardRef<SVGSVGElement, SvgDeleteProps>(
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
      <path d="M4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM3 4h1v1H3zM10 4h1v1h-1zM2 5h1v1H2zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1h-1zM1 6h1v1H1zM7 6h1v1H7zM10 6h1v1h-1zM2 7h1v1H2zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM3 8h1v1H3zM10 8h1v1h-1zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9z" />
    </svg>
  )
);

SvgDelete.displayName = "SvgDelete";

export default SvgDelete;
