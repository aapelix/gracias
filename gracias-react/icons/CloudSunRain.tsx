import * as React from "react";

interface SvgCloudSunRainProps extends React.SVGAttributes<SVGElement> {}

const SvgCloudSunRain = React.forwardRef<SVGSVGElement, SvgCloudSunRainProps>(
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
      <path d="M7 0h1v1H7zM4 1h1v1H4zM7 1h1v1H7zM11 1h1v1h-1zM5 2h1v1H5zM10 2h1v1h-1zM7 3h1v1H7zM8 3h1v1H8zM3 4h1v1H3zM4 4h1v1H4zM9 4h1v1H9zM2 5h1v1H2zM5 5h1v1H5zM9 5h1v1H9zM11 5h1v1h-1zM1 6h1v1H1zM6 6h1v1H6zM7 6h1v1H7zM1 7h1v1H1zM8 7h1v1H8zM1 8h1v1H1zM4 8h1v1H4zM8 8h1v1H8zM2 9h1v1H2zM4 9h1v1H4zM6 9h1v1H6zM8 9h1v1H8zM6 10h1v1H6z" />
    </svg>
  )
);

SvgCloudSunRain.displayName = "SvgCloudSunRain";

export default SvgCloudSunRain;
