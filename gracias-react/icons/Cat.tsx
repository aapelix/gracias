import * as React from "react";

interface SvgCatProps extends React.SVGAttributes<SVGElement> {}

const SvgCat = React.forwardRef<SVGSVGElement, SvgCatProps>(
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
      <path d="M1 1h1v1H1zM2 1h1v1H2zM3 1h1v1H3zM8 1h1v1H8zM9 1h1v1H9zM10 1h1v1h-1zM1 2h1v1H1zM4 2h1v1H4zM7 2h1v1H7zM10 2h1v1h-1zM1 3h1v1H1zM5 3h1v1H5zM6 3h1v1H6zM10 3h1v1h-1zM2 4h1v1H2zM9 4h1v1H9zM2 5h1v1H2zM9 5h1v1H9zM1 6h1v1H1zM4 6h1v1H4zM7 6h1v1H7zM10 6h1v1h-1zM1 7h1v1H1zM4 7h1v1H4zM7 7h1v1H7zM10 7h1v1h-1zM1 8h1v1H1zM5 8h1v1H5zM6 8h1v1H6zM10 8h1v1h-1zM2 9h1v1H2zM5 9h1v1H5zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgCat.displayName = "SvgCat";

export default SvgCat;
