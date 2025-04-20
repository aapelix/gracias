import * as React from "react";

interface SvgFishProps extends React.SVGAttributes<SVGElement> {}

const SvgFish = React.forwardRef<SVGSVGElement, SvgFishProps>(
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
      <path d="M3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM1 3h1v1H1zM4 3h1v1H4zM6 3h1v1H6zM7 3h1v1H7zM0 4h1v1H0zM2 4h1v1H2zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM8 4h1v1H8zM0 5h1v1H0zM3 5h1v1H3zM6 5h1v1H6zM9 5h1v1H9zM1 6h1v1H1zM3 6h1v1H3zM6 6h1v1H6zM8 6h1v1H8zM10 6h1v1h-1zM0 7h1v1H0zM3 7h1v1H3zM6 7h1v1H6zM9 7h1v1H9zM0 8h1v1H0zM2 8h1v1H2zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM8 8h1v1H8zM1 9h1v1H1zM4 9h1v1H4zM6 9h1v1H6zM7 9h1v1H7zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgFish.displayName = "SvgFish";

export default SvgFish;
