import * as React from "react";

interface SvgCroissantProps extends React.SVGAttributes<SVGElement> {}

const SvgCroissant = React.forwardRef<SVGSVGElement, SvgCroissantProps>(
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
      <path d="M3 0h1v1H3zM2 1h1v1H2zM4 1h1v1H4zM2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM1 3h1v1H1zM5 3h1v1H5zM1 4h1v1H1zM5 4h1v1H5zM6 4h1v1H6zM1 5h1v1H1zM3 5h1v1H3zM4 5h1v1H4zM7 5h1v1H7zM2 6h1v1H2zM7 6h1v1H7zM8 6h1v1H8zM2 7h1v1H2zM6 7h1v1H6zM9 7h1v1H9zM10 7h1v1h-1zM11 7h1v1h-1zM2 8h1v1H2zM6 8h1v1H6zM9 8h1v1H9zM11 8h1v1h-1zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM9 9h1v1H9zM10 9h1v1h-1zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgCroissant.displayName = "SvgCroissant";

export default SvgCroissant;
