import * as React from "react";

interface SvgCigaretteOffProps extends React.SVGAttributes<SVGElement> {}

const SvgCigaretteOff = React.forwardRef<SVGSVGElement, SvgCigaretteOffProps>(
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
      <path d="M1 1h1v1H1zM5 1h1v1H5zM7 1h1v1H7zM2 2h1v1H2zM5 2h1v1H5zM7 2h1v1H7zM3 3h1v1H3zM6 3h1v1H6zM8 3h1v1H8zM4 4h1v1H4zM8 4h1v1H8zM5 5h1v1H5zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM9 6h1v1H9zM1 7h1v1H1zM4 7h1v1H4zM7 7h1v1H7zM10 7h1v1h-1zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM9 9h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgCigaretteOff.displayName = "SvgCigaretteOff";

export default SvgCigaretteOff;
