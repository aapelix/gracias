import * as React from "react";

interface SvgEthernetPortProps extends React.SVGAttributes<SVGElement> {}

const SvgEthernetPort = React.forwardRef<SVGSVGElement, SvgEthernetPortProps>(
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
      <path d="M0 1h1v1H0zM1 1h1v1H1zM2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM10 1h1v1h-1zM0 2h1v1H0zM10 2h1v1h-1zM0 3h1v1H0zM2 3h1v1H2zM4 3h1v1H4zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1h-1zM0 4h1v1H0zM2 4h1v1H2zM4 4h1v1H4zM6 4h1v1H6zM8 4h1v1H8zM10 4h1v1h-1zM0 5h1v1H0zM10 5h1v1h-1zM0 6h1v1H0zM10 6h1v1h-1zM0 7h1v1H0zM10 7h1v1h-1zM0 8h1v1H0zM1 8h1v1H1zM2 8h1v1H2zM8 8h1v1H8zM9 8h1v1H9zM10 8h1v1h-1zM3 9h1v1H3zM7 9h1v1H7zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgEthernetPort.displayName = "SvgEthernetPort";

export default SvgEthernetPort;
