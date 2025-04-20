import * as React from "react";

interface SvgFingerprintProps extends React.SVGAttributes<SVGElement> {}

const SvgFingerprint = React.forwardRef<SVGSVGElement, SvgFingerprintProps>(
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
      <path d="M5 0h1v1H5zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM2 2h1v1H2zM10 2h1v1h-1zM1 3h1v1H1zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM1 4h1v1H1zM9 4h1v1H9zM1 5h1v1H1zM3 5h1v1H3zM5 5h1v1H5zM6 5h1v1H6zM9 5h1v1H9zM11 5h1v1h-1zM1 6h1v1H1zM3 6h1v1H3zM5 6h1v1H5zM9 6h1v1H9zM11 6h1v1h-1zM3 7h1v1H3zM5 7h1v1H5zM7 7h1v1H7zM9 7h1v1H9zM11 7h1v1h-1zM1 8h1v1H1zM3 8h1v1H3zM5 8h1v1H5zM7 8h1v1H7zM11 8h1v1h-1zM3 9h1v1H3zM7 9h1v1H7zM9 9h1v1H9zM2 10h1v1H2zM3 10h1v1H3zM5 10h1v1H5zM7 10h1v1H7zM9 10h1v1H9zM4 11h1v1H4zM7 11h1v1H7zM9 11h1v1H9z" />
    </svg>
  )
);

SvgFingerprint.displayName = "SvgFingerprint";

export default SvgFingerprint;
