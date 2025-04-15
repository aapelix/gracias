import * as React from "react";

interface SvgBluetoothOffProps extends React.SVGAttributes<SVGElement> {}

const SvgBluetoothOff = React.forwardRef<SVGSVGElement, SvgBluetoothOffProps>(
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
      <path d="M1 1h1v1H1zM2 2h1v1H2zM5 2h1v1H5zM6 2h1v1H6zM3 3h1v1H3zM5 3h1v1H5zM7 3h1v1H7zM4 4h1v1H4zM8 4h1v1H8zM5 5h1v1H5zM7 5h1v1H7zM5 6h1v1H5zM6 6h1v1H6zM4 7h1v1H4zM5 7h1v1H5zM7 7h1v1H7zM3 8h1v1H3zM5 8h1v1H5zM8 8h1v1H8zM2 9h1v1H2zM5 9h1v1H5zM7 9h1v1H7zM9 9h1v1H9zM5 10h1v1H5zM6 10h1v1H6zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgBluetoothOff.displayName = "SvgBluetoothOff";

export default SvgBluetoothOff;
