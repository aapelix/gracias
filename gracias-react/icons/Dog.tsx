import * as React from "react";

interface SvgDogProps extends React.SVGAttributes<SVGElement> {}

const SvgDog = React.forwardRef<SVGSVGElement, SvgDogProps>(
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
      <path d="M2 0h1v1H2zM3 0h1v1H3zM8 0h1v1H8zM9 0h1v1H9zM1 1h1v1H1zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM10 1h1v1h-1zM1 2h1v1H1zM10 2h1v1h-1zM0 3h1v1H0zM3 3h1v1H3zM8 3h1v1H8zM11 3h1v1h-1zM0 4h1v1H0zM2 4h1v1H2zM9 4h1v1H9zM11 4h1v1h-1zM0 5h1v1H0zM1 5h1v1H1zM10 5h1v1h-1zM11 5h1v1h-1zM1 6h1v1H1zM3 6h1v1H3zM8 6h1v1H8zM10 6h1v1h-1zM1 7h1v1H1zM3 7h1v1H3zM8 7h1v1H8zM10 7h1v1h-1zM1 8h1v1H1zM5 8h1v1H5zM6 8h1v1H6zM10 8h1v1h-1zM2 9h1v1H2zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgDog.displayName = "SvgDog";

export default SvgDog;
