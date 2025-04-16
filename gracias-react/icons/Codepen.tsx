import * as React from "react";

interface SvgCodepenProps extends React.SVGAttributes<SVGElement> {}

const SvgCodepen = React.forwardRef<SVGSVGElement, SvgCodepenProps>(
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
      <path d="M5 2h1v1H5zM6 2h1v1H6zM3 3h1v1H3zM4 3h1v1H4zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM1 4h1v1H1zM2 4h1v1H2zM5 4h1v1H5zM6 4h1v1H6zM9 4h1v1H9zM10 4h1v1h-1zM1 5h1v1H1zM3 5h1v1H3zM4 5h1v1H4zM7 5h1v1H7zM8 5h1v1H8zM10 5h1v1h-1zM1 6h1v1H1zM2 6h1v1H2zM5 6h1v1H5zM6 6h1v1H6zM9 6h1v1H9zM10 6h1v1h-1zM1 7h1v1H1zM2 7h1v1H2zM5 7h1v1H5zM9 7h1v1H9zM10 7h1v1h-1zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM7 8h1v1H7zM8 8h1v1H8zM5 9h1v1H5zM6 9h1v1H6z" />
    </svg>
  )
);

SvgCodepen.displayName = "SvgCodepen";

export default SvgCodepen;
