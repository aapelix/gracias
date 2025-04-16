import * as React from "react";

interface SvgBirdProps extends React.SVGAttributes<SVGElement> {}

const SvgBird = React.forwardRef<SVGSVGElement, SvgBirdProps>(
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
      <path d="M6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM5 2h1v1H5zM9 2h1v1H9zM5 3h1v1H5zM7 3h1v1H7zM9 3h1v1H9zM4 4h1v1H4zM9 4h1v1H9zM10 4h1v1h-1zM4 5h1v1H4zM5 5h1v1H5zM9 5h1v1H9zM3 6h1v1H3zM6 6h1v1H6zM9 6h1v1H9zM3 7h1v1H3zM5 7h1v1H5zM9 7h1v1H9zM2 8h1v1H2zM4 8h1v1H4zM8 8h1v1H8zM1 9h1v1H1zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM1 10h1v1H1zM4 10h1v1H4zM6 10h1v1H6z" />
    </svg>
  )
);

SvgBird.displayName = "SvgBird";

export default SvgBird;
