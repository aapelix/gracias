import * as React from "react";

interface SvgBuilding2Props extends React.SVGAttributes<SVGElement> {}

const SvgBuilding2 = React.forwardRef<SVGSVGElement, SvgBuilding2Props>(
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
      <path d="M4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM3 2h1v1H3zM8 2h1v1H8zM3 3h1v1H3zM5 3h1v1H5zM6 3h1v1H6zM8 3h1v1H8zM3 4h1v1H3zM8 4h1v1H8zM3 5h1v1H3zM5 5h1v1H5zM6 5h1v1H6zM8 5h1v1H8zM9 5h1v1H9zM3 6h1v1H3zM8 6h1v1H8zM10 6h1v1h-1zM2 7h1v1H2zM3 7h1v1H3zM5 7h1v1H5zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM1 8h1v1H1zM3 8h1v1H3zM8 8h1v1H8zM10 8h1v1h-1zM1 9h1v1H1zM3 9h1v1H3zM5 9h1v1H5zM6 9h1v1H6zM8 9h1v1H8zM10 9h1v1h-1zM1 10h1v1H1zM3 10h1v1H3zM8 10h1v1H8zM10 10h1v1h-1zM2 11h1v1H2zM3 11h1v1H3zM4 11h1v1H4zM5 11h1v1H5zM6 11h1v1H6zM7 11h1v1H7zM8 11h1v1H8zM9 11h1v1H9z" />
    </svg>
  )
);

SvgBuilding2.displayName = "SvgBuilding2";

export default SvgBuilding2;
