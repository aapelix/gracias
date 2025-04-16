import * as React from "react";

interface SvgBeerProps extends React.SVGAttributes<SVGElement> {}

const SvgBeer = React.forwardRef<SVGSVGElement, SvgBeerProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM5 1h1v1H5zM7 1h1v1H7zM8 1h1v1H8zM1 2h1v1H1zM4 2h1v1H4zM6 2h1v1H6zM9 2h1v1H9zM1 3h1v1H1zM9 3h1v1H9zM2 4h1v1H2zM3 4h1v1H3zM7 4h1v1H7zM8 4h1v1H8zM2 5h1v1H2zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM8 5h1v1H8zM9 5h1v1H9zM2 6h1v1H2zM8 6h1v1H8zM10 6h1v1h-1zM2 7h1v1H2zM4 7h1v1H4zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM2 8h1v1H2zM4 8h1v1H4zM6 8h1v1H6zM8 8h1v1H8zM9 8h1v1H9zM2 9h1v1H2zM8 9h1v1H8zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgBeer.displayName = "SvgBeer";

export default SvgBeer;
