import * as React from "react";

interface SvgCameraProps extends React.SVGAttributes<SVGElement> {}

const SvgCamera = React.forwardRef<SVGSVGElement, SvgCameraProps>(
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
      <path d="M4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM3 3h1v1H3zM8 3h1v1H8zM1 4h1v1H1zM2 4h1v1H2zM9 4h1v1H9zM10 4h1v1h-1zM1 5h1v1H1zM5 5h1v1H5zM6 5h1v1H6zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM7 6h1v1H7zM10 6h1v1h-1zM1 7h1v1H1zM4 7h1v1H4zM7 7h1v1H7zM10 7h1v1h-1zM1 8h1v1H1zM5 8h1v1H5zM6 8h1v1H6zM10 8h1v1h-1zM1 9h1v1H1zM10 9h1v1h-1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgCamera.displayName = "SvgCamera";

export default SvgCamera;
