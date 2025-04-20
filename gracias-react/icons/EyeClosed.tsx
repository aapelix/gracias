import * as React from "react";

interface SvgEyeClosedProps extends React.SVGAttributes<SVGElement> {}

const SvgEyeClosed = React.forwardRef<SVGSVGElement, SvgEyeClosedProps>(
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
      <path d="M1 3h1v1H1zM10 3h1v1h-1zM1 4h1v1H1zM10 4h1v1h-1zM2 5h1v1H2zM9 5h1v1H9zM1 6h1v1H1zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM10 6h1v1h-1zM4 7h1v1H4zM7 7h1v1H7z" />
    </svg>
  )
);

SvgEyeClosed.displayName = "SvgEyeClosed";

export default SvgEyeClosed;
