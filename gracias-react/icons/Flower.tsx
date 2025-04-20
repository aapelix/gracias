import * as React from "react";

interface SvgFlowerProps extends React.SVGAttributes<SVGElement> {}

const SvgFlower = React.forwardRef<SVGSVGElement, SvgFlowerProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM1 2h1v1H1zM5 2h1v1H5zM6 2h1v1H6zM10 2h1v1h-1zM1 3h1v1H1zM3 3h1v1H3zM5 3h1v1H5zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1h-1zM1 4h1v1H1zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM7 4h1v1H7zM10 4h1v1h-1zM2 5h1v1H2zM3 5h1v1H3zM4 5h1v1H4zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM7 6h1v1H7zM8 6h1v1H8zM9 6h1v1H9zM1 7h1v1H1zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM10 7h1v1h-1zM1 8h1v1H1zM3 8h1v1H3zM5 8h1v1H5zM6 8h1v1H6zM8 8h1v1H8zM10 8h1v1h-1zM1 9h1v1H1zM5 9h1v1H5zM6 9h1v1H6zM10 9h1v1h-1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgFlower.displayName = "SvgFlower";

export default SvgFlower;
