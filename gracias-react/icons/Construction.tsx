import * as React from "react";

interface SvgConstructionProps extends React.SVGAttributes<SVGElement> {}

const SvgConstruction = React.forwardRef<SVGSVGElement, SvgConstructionProps>(
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
      <path d="M3 1h1v1H3zM8 1h1v1H8zM1 2h1v1H1zM2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM10 2h1v1h-1zM1 3h1v1H1zM2 3h1v1H2zM5 3h1v1H5zM8 3h1v1H8zM10 3h1v1h-1zM1 4h1v1H1zM3 4h1v1H3zM6 4h1v1H6zM9 4h1v1H9zM10 4h1v1h-1zM1 5h1v1H1zM4 5h1v1H4zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM9 6h1v1H9zM10 6h1v1h-1zM3 7h1v1H3zM8 7h1v1H8zM3 8h1v1H3zM8 8h1v1H8zM3 9h1v1H3zM8 9h1v1H8zM3 10h1v1H3zM8 10h1v1H8z" />
    </svg>
  )
);

SvgConstruction.displayName = "SvgConstruction";

export default SvgConstruction;
