import * as React from "react";

interface SvgCigaretteProps extends React.SVGAttributes<SVGElement> {}

const SvgCigarette = React.forwardRef<SVGSVGElement, SvgCigaretteProps>(
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
      <path d="M5 1h1v1H5zM7 1h1v1H7zM5 2h1v1H5zM7 2h1v1H7zM6 3h1v1H6zM8 3h1v1H8zM6 4h1v1H6zM8 4h1v1H8zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM9 6h1v1H9zM1 7h1v1H1zM4 7h1v1H4zM10 7h1v1h-1zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM9 8h1v1H9z" />
    </svg>
  )
);

SvgCigarette.displayName = "SvgCigarette";

export default SvgCigarette;
