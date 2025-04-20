import * as React from "react";

interface SvgFlower2Props extends React.SVGAttributes<SVGElement> {}

const SvgFlower2 = React.forwardRef<SVGSVGElement, SvgFlower2Props>(
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
      <path d="M3 0h1v1H3zM4 0h1v1H4zM6 0h1v1H6zM7 0h1v1H7zM2 1h1v1H2zM5 1h1v1H5zM8 1h1v1H8zM2 2h1v1H2zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM8 2h1v1H8zM3 3h1v1H3zM4 3h1v1H4zM6 3h1v1H6zM7 3h1v1H7zM2 4h1v1H2zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM8 4h1v1H8zM2 5h1v1H2zM5 5h1v1H5zM8 5h1v1H8zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM5 7h1v1H5zM1 8h1v1H1zM2 8h1v1H2zM3 8h1v1H3zM5 8h1v1H5zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM1 9h1v1H1zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM9 9h1v1H9zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgFlower2.displayName = "SvgFlower2";

export default SvgFlower2;
