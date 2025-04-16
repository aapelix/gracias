import * as React from "react";

interface SvgBitcoinProps extends React.SVGAttributes<SVGElement> {}

const SvgBitcoin = React.forwardRef<SVGSVGElement, SvgBitcoinProps>(
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
      <path d="M3 1h1v1H3zM5 1h1v1H5zM7 1h1v1H7zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM5 3h1v1H5zM8 3h1v1H8zM4 4h1v1H4zM8 4h1v1H8zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM4 6h1v1H4zM7 6h1v1H7zM8 6h1v1H8zM4 7h1v1H4zM8 7h1v1H8zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM8 8h1v1H8zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM3 10h1v1H3zM4 10h1v1H4zM6 10h1v1H6z" />
    </svg>
  )
);

SvgBitcoin.displayName = "SvgBitcoin";

export default SvgBitcoin;
