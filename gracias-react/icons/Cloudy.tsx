import * as React from "react";

interface SvgCloudyProps extends React.SVGAttributes<SVGElement> {}

const SvgCloudy = React.forwardRef<SVGSVGElement, SvgCloudyProps>(
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
      <path d="M4 0h1v1H4zM5 0h1v1H5zM6 0h1v1H6zM3 1h1v1H3zM7 1h1v1H7zM2 2h1v1H2zM8 2h1v1H8zM9 2h1v1H9zM10 2h1v1h-1zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM8 3h1v1H8zM11 3h1v1h-1zM2 4h1v1H2zM6 4h1v1H6zM11 4h1v1h-1zM1 5h1v1H1zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM1 6h1v1H1zM7 6h1v1H7zM10 6h1v1h-1zM1 7h1v1H1zM10 7h1v1h-1zM1 8h1v1H1zM10 8h1v1h-1zM2 9h1v1H2zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgCloudy.displayName = "SvgCloudy";

export default SvgCloudy;
