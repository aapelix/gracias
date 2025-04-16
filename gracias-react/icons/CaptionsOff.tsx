import * as React from "react";

interface SvgCaptionsOffProps extends React.SVGAttributes<SVGElement> {}

const SvgCaptionsOff = React.forwardRef<SVGSVGElement, SvgCaptionsOffProps>(
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
      <path d="M1 1h1v1H1zM2 2h1v1H2zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM1 3h1v1H1zM3 3h1v1H3zM10 3h1v1h-1zM1 4h1v1H1zM4 4h1v1H4zM10 4h1v1h-1zM1 5h1v1H1zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM8 5h1v1H8zM10 5h1v1h-1zM1 6h1v1H1zM6 6h1v1H6zM10 6h1v1h-1zM1 7h1v1H1zM3 7h1v1H3zM4 7h1v1H4zM5 7h1v1H5zM7 7h1v1H7zM10 7h1v1h-1zM1 8h1v1H1zM8 8h1v1H8zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgCaptionsOff.displayName = "SvgCaptionsOff";

export default SvgCaptionsOff;
