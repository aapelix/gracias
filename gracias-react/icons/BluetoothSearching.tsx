import * as React from "react";

interface SvgBluetoothSearchingProps extends React.SVGAttributes<SVGElement> {}

const SvgBluetoothSearching = React.forwardRef<SVGSVGElement, SvgBluetoothSearchingProps>(
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
      <path d="M5 2h1v1H5zM6 2h1v1H6zM2 3h1v1H2zM5 3h1v1H5zM7 3h1v1H7zM3 4h1v1H3zM5 4h1v1H5zM8 4h1v1H8zM10 4h1v1h-1zM4 5h1v1H4zM5 5h1v1H5zM7 5h1v1H7zM11 5h1v1h-1zM5 6h1v1H5zM6 6h1v1H6zM9 6h1v1H9zM11 6h1v1h-1zM4 7h1v1H4zM5 7h1v1H5zM7 7h1v1H7zM11 7h1v1h-1zM3 8h1v1H3zM5 8h1v1H5zM8 8h1v1H8zM10 8h1v1h-1zM2 9h1v1H2zM5 9h1v1H5zM7 9h1v1H7zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgBluetoothSearching.displayName = "SvgBluetoothSearching";

export default SvgBluetoothSearching;
