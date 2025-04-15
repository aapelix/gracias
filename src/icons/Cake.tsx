import * as React from "react";

interface SvgCakeProps extends React.SVGAttributes<SVGElement> {}

const SvgCake = React.forwardRef<SVGSVGElement, SvgCakeProps>(
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
      <path d="M3 2h1v1H3zM5 2h1v1H5zM8 2h1v1H8zM3 4h1v1H3zM5 4h1v1H5zM8 4h1v1H8zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM2 6h1v1H2zM9 6h1v1H9zM2 7h1v1H2zM3 7h1v1H3zM5 7h1v1H5zM7 7h1v1H7zM9 7h1v1H9zM2 8h1v1H2zM4 8h1v1H4zM6 8h1v1H6zM8 8h1v1H8zM9 8h1v1H9zM2 9h1v1H2zM9 9h1v1H9zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgCake.displayName = "SvgCake";

export default SvgCake;
