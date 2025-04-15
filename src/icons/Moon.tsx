import * as React from "react";

interface SvgMoonProps extends React.SVGAttributes<SVGElement> {}

const SvgMoon = React.forwardRef<SVGSVGElement, SvgMoonProps>(
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
      <path d="M4 1h1v1H4zM5 1h1v1H5zM3 2h1v1H3zM5 2h1v1H5zM2 3h1v1H2zM4 3h1v1H4zM1 4h1v1H1zM4 4h1v1H4zM1 5h1v1H1zM4 5h1v1H4zM1 6h1v1H1zM5 6h1v1H5zM9 6h1v1H9zM10 6h1v1h-1zM1 7h1v1H1zM6 7h1v1H6zM7 7h1v1H7zM8 7h1v1H8zM10 7h1v1h-1zM2 8h1v1H2zM9 8h1v1H9zM3 9h1v1H3zM8 9h1v1H8zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgMoon.displayName = "SvgMoon";

export default SvgMoon;
