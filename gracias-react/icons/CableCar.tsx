import * as React from "react";

interface SvgCableCarProps extends React.SVGAttributes<SVGElement> {}

const SvgCableCar = React.forwardRef<SVGSVGElement, SvgCableCarProps>(
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
      <path d="M6 0h1v1H6zM4 1h1v1H4zM9 1h1v1H9zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM1 4h1v1H1zM2 4h1v1H2zM5 4h1v1H5zM5 5h1v1H5zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM1 7h1v1H1zM3 7h1v1H3zM7 7h1v1H7zM9 7h1v1H9zM1 8h1v1H1zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM1 9h1v1H1zM9 9h1v1H9zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgCableCar.displayName = "SvgCableCar";

export default SvgCableCar;
