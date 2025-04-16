import * as React from "react";

interface SvgCherryProps extends React.SVGAttributes<SVGElement> {}

const SvgCherry = React.forwardRef<SVGSVGElement, SvgCherryProps>(
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
      <path d="M7 0h1v1H7zM6 1h1v1H6zM8 1h1v1H8zM9 1h1v1H9zM6 2h1v1H6zM7 2h1v1H7zM10 2h1v1h-1zM5 3h1v1H5zM6 3h1v1H6zM8 3h1v1H8zM11 3h1v1h-1zM5 4h1v1H5zM7 4h1v1H7zM9 4h1v1H9zM10 4h1v1h-1zM4 5h1v1H4zM7 5h1v1H7zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM1 7h1v1H1zM3 7h1v1H3zM5 7h1v1H5zM7 7h1v1H7zM9 7h1v1H9zM1 8h1v1H1zM5 8h1v1H5zM9 8h1v1H9zM1 9h1v1H1zM5 9h1v1H5zM9 9h1v1H9zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgCherry.displayName = "SvgCherry";

export default SvgCherry;
