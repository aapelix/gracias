import * as React from "react";

interface SvgCloudDrizzleProps extends React.SVGAttributes<SVGElement> {}

const SvgCloudDrizzle = React.forwardRef<SVGSVGElement, SvgCloudDrizzleProps>(
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
      <path d="M3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM2 3h1v1H2zM6 3h1v1H6zM1 4h1v1H1zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM1 5h1v1H1zM10 5h1v1h-1zM1 6h1v1H1zM3 6h1v1H3zM7 6h1v1H7zM10 6h1v1h-1zM1 7h1v1H1zM3 7h1v1H3zM5 7h1v1H5zM7 7h1v1H7zM10 7h1v1h-1zM5 8h1v1H5zM9 8h1v1H9zM3 9h1v1H3zM7 9h1v1H7zM3 10h1v1H3zM5 10h1v1H5zM7 10h1v1H7zM5 11h1v1H5z" />
    </svg>
  )
);

SvgCloudDrizzle.displayName = "SvgCloudDrizzle";

export default SvgCloudDrizzle;
