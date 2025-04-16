import * as React from "react";

interface SvgCastleProps extends React.SVGAttributes<SVGElement> {}

const SvgCastle = React.forwardRef<SVGSVGElement, SvgCastleProps>(
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
      <path d="M3 1h1v1H3zM5 1h1v1H5zM8 1h1v1H8zM3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM3 3h1v1H3zM8 3h1v1H8zM1 4h1v1H1zM3 4h1v1H3zM8 4h1v1H8zM10 4h1v1h-1zM1 5h1v1H1zM2 5h1v1H2zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM10 5h1v1h-1zM1 6h1v1H1zM10 6h1v1h-1zM1 7h1v1H1zM5 7h1v1H5zM6 7h1v1H6zM10 7h1v1h-1zM1 8h1v1H1zM4 8h1v1H4zM7 8h1v1H7zM10 8h1v1h-1zM1 9h1v1H1zM4 9h1v1H4zM7 9h1v1H7zM10 9h1v1h-1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgCastle.displayName = "SvgCastle";

export default SvgCastle;
