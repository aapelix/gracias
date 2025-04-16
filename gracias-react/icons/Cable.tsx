import * as React from "react";

interface SvgCableProps extends React.SVGAttributes<SVGElement> {}

const SvgCable = React.forwardRef<SVGSVGElement, SvgCableProps>(
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
      <path d="M3 1h1v1H3zM7 1h1v1H7zM8 1h1v1H8zM1 2h1v1H1zM2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM6 2h1v1H6zM9 2h1v1H9zM1 3h1v1H1zM4 3h1v1H4zM6 3h1v1H6zM9 3h1v1H9zM2 4h1v1H2zM3 4h1v1H3zM6 4h1v1H6zM9 4h1v1H9zM2 5h1v1H2zM5 5h1v1H5zM9 5h1v1H9zM2 6h1v1H2zM5 6h1v1H5zM9 6h1v1H9zM2 7h1v1H2zM5 7h1v1H5zM8 7h1v1H8zM9 7h1v1H9zM2 8h1v1H2zM5 8h1v1H5zM7 8h1v1H7zM10 8h1v1h-1zM2 9h1v1H2zM5 9h1v1H5zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9zM10 9h1v1h-1zM3 10h1v1H3zM4 10h1v1H4zM9 10h1v1H9z" />
    </svg>
  )
);

SvgCable.displayName = "SvgCable";

export default SvgCable;
