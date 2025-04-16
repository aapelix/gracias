import * as React from "react";

interface SvgCarProps extends React.SVGAttributes<SVGElement> {}

const SvgCar = React.forwardRef<SVGSVGElement, SvgCarProps>(
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
      <path d="M2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM1 4h1v1H1zM2 4h1v1H2zM7 4h1v1H7zM8 4h1v1H8zM1 5h1v1H1zM9 5h1v1H9zM10 5h1v1h-1zM1 6h1v1H1zM11 6h1v1h-1zM1 7h1v1H1zM2 7h1v1H2zM3 7h1v1H3zM4 7h1v1H4zM7 7h1v1H7zM8 7h1v1H8zM9 7h1v1H9zM11 7h1v1h-1zM1 8h1v1H1zM2 8h1v1H2zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM9 8h1v1H9zM10 8h1v1h-1zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9z" />
    </svg>
  )
);

SvgCar.displayName = "SvgCar";

export default SvgCar;
