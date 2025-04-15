import * as React from "react";

interface SvgAtSignProps extends React.SVGAttributes<SVGElement> {}

const SvgAtSign = React.forwardRef<SVGSVGElement, SvgAtSignProps>(
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
      <path d="M5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM3 2h1v1H3zM4 2h1v1H4zM8 2h1v1H8zM9 2h1v1H9zM1 3h1v1H1zM2 3h1v1H2zM10 3h1v1h-1zM1 4h1v1H1zM5 4h1v1H5zM6 4h1v1H6zM8 4h1v1H8zM10 4h1v1h-1zM11 4h1v1h-1zM1 5h1v1H1zM4 5h1v1H4zM7 5h1v1H7zM8 5h1v1H8zM10 5h1v1h-1zM0 6h1v1H0zM1 6h1v1H1zM4 6h1v1H4zM8 6h1v1H8zM11 6h1v1h-1zM1 7h1v1H1zM4 7h1v1H4zM8 7h1v1H8zM11 7h1v1h-1zM1 8h1v1H1zM4 8h1v1H4zM8 8h1v1H8zM9 8h1v1H9zM10 8h1v1h-1zM2 9h1v1H2zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM2 10h1v1H2zM3 10h1v1H3zM9 10h1v1H9zM4 11h1v1H4zM5 11h1v1H5zM6 11h1v1H6zM7 11h1v1H7zM8 11h1v1H8zM9 11h1v1H9z" />
    </svg>
  )
);

SvgAtSign.displayName = "SvgAtSign";

export default SvgAtSign;
