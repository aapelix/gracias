import * as React from "react";

interface SvgBusFrontProps extends React.SVGAttributes<SVGElement> {}

const SvgBusFront = React.forwardRef<SVGSVGElement, SvgBusFrontProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM2 2h1v1H2zM5 2h1v1H5zM6 2h1v1H6zM9 2h1v1H9zM1 3h1v1H1zM2 3h1v1H2zM9 3h1v1H9zM10 3h1v1h-1zM2 4h1v1H2zM9 4h1v1H9zM2 5h1v1H2zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM2 6h1v1H2zM9 6h1v1H9zM2 7h1v1H2zM4 7h1v1H4zM7 7h1v1H7zM9 7h1v1H9zM2 8h1v1H2zM9 8h1v1H9zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM3 10h1v1H3zM8 10h1v1H8z" />
    </svg>
  )
);

SvgBusFront.displayName = "SvgBusFront";

export default SvgBusFront;
