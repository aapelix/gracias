import * as React from "react";

interface SvgCloudMoonProps extends React.SVGAttributes<SVGElement> {}

const SvgCloudMoon = React.forwardRef<SVGSVGElement, SvgCloudMoonProps>(
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
      <path d="M8 0h1v1H8zM7 1h1v1H7zM8 1h1v1H8zM6 2h1v1H6zM8 2h1v1H8zM6 3h1v1H6zM9 3h1v1H9zM3 4h1v1H3zM4 4h1v1H4zM10 4h1v1h-1zM11 4h1v1h-1zM2 5h1v1H2zM5 5h1v1H5zM11 5h1v1h-1zM1 6h1v1H1zM6 6h1v1H6zM7 6h1v1H7zM10 6h1v1h-1zM1 7h1v1H1zM8 7h1v1H8zM1 8h1v1H1zM8 8h1v1H8zM2 9h1v1H2zM8 9h1v1H8zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgCloudMoon.displayName = "SvgCloudMoon";

export default SvgCloudMoon;
