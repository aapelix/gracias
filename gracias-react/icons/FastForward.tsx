import * as React from "react";

interface SvgFastForwardProps extends React.SVGAttributes<SVGElement> {}

const SvgFastForward = React.forwardRef<SVGSVGElement, SvgFastForwardProps>(
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
      <path d="M1 1h1v1H1zM6 1h1v1H6zM1 2h1v1H1zM2 2h1v1H2zM6 2h1v1H6zM7 2h1v1H7zM1 3h1v1H1zM3 3h1v1H3zM6 3h1v1H6zM8 3h1v1H8zM1 4h1v1H1zM4 4h1v1H4zM6 4h1v1H6zM9 4h1v1H9zM1 5h1v1H1zM5 5h1v1H5zM6 5h1v1H6zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM6 6h1v1H6zM9 6h1v1H9zM1 7h1v1H1zM3 7h1v1H3zM6 7h1v1H6zM8 7h1v1H8zM1 8h1v1H1zM2 8h1v1H2zM6 8h1v1H6zM7 8h1v1H7zM1 9h1v1H1zM6 9h1v1H6z" />
    </svg>
  )
);

SvgFastForward.displayName = "SvgFastForward";

export default SvgFastForward;
