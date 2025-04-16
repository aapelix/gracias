import * as React from "react";

interface SvgCoinsProps extends React.SVGAttributes<SVGElement> {}

const SvgCoins = React.forwardRef<SVGSVGElement, SvgCoinsProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM2 2h1v1H2zM6 2h1v1H6zM1 3h1v1H1zM3 3h1v1H3zM4 3h1v1H4zM7 3h1v1H7zM1 4h1v1H1zM4 4h1v1H4zM7 4h1v1H7zM1 5h1v1H1zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM7 5h1v1H7zM9 5h1v1H9zM2 6h1v1H2zM6 6h1v1H6zM10 6h1v1h-1zM3 7h1v1H3zM4 7h1v1H4zM5 7h1v1H5zM8 7h1v1H8zM10 7h1v1h-1zM7 8h1v1H7zM8 8h1v1H8zM10 8h1v1h-1zM5 9h1v1H5zM9 9h1v1H9zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgCoins.displayName = "SvgCoins";

export default SvgCoins;
