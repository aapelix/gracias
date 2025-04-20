import * as React from "react";

interface SvgEyeProps extends React.SVGAttributes<SVGElement> {}

const SvgEye = React.forwardRef<SVGSVGElement, SvgEyeProps>(
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
      <path d="M3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM2 4h1v1H2zM5 4h1v1H5zM6 4h1v1H6zM9 4h1v1H9zM1 5h1v1H1zM4 5h1v1H4zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM7 6h1v1H7zM10 6h1v1h-1zM2 7h1v1H2zM5 7h1v1H5zM6 7h1v1H6zM9 7h1v1H9zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8z" />
    </svg>
  )
);

SvgEye.displayName = "SvgEye";

export default SvgEye;
