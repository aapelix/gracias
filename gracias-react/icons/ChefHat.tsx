import * as React from "react";

interface SvgChefHatProps extends React.SVGAttributes<SVGElement> {}

const SvgChefHat = React.forwardRef<SVGSVGElement, SvgChefHatProps>(
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
      <path d="M4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM2 2h1v1H2zM3 2h1v1H3zM8 2h1v1H8zM9 2h1v1H9zM1 3h1v1H1zM10 3h1v1h-1zM1 4h1v1H1zM10 4h1v1h-1zM1 5h1v1H1zM10 5h1v1h-1zM2 6h1v1H2zM9 6h1v1H9zM3 7h1v1H3zM8 7h1v1H8zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM3 9h1v1H3zM8 9h1v1H8zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgChefHat.displayName = "SvgChefHat";

export default SvgChefHat;
