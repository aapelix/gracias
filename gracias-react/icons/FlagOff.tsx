import * as React from "react";

interface SvgFlagOffProps extends React.SVGAttributes<SVGElement> {}

const SvgFlagOff = React.forwardRef<SVGSVGElement, SvgFlagOffProps>(
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
      <path d="M1 1h1v1H1zM4 1h1v1H4zM5 1h1v1H5zM9 1h1v1H9zM10 1h1v1h-1zM2 2h1v1H2zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM10 2h1v1h-1zM2 3h1v1H2zM3 3h1v1H3zM10 3h1v1h-1zM2 4h1v1H2zM4 4h1v1H4zM10 4h1v1h-1zM2 5h1v1H2zM5 5h1v1H5zM10 5h1v1h-1zM2 6h1v1H2zM6 6h1v1H6zM10 6h1v1h-1zM2 7h1v1H2zM3 7h1v1H3zM4 7h1v1H4zM5 7h1v1H5zM7 7h1v1H7zM10 7h1v1h-1zM2 8h1v1H2zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM2 9h1v1H2zM9 9h1v1H9zM2 10h1v1H2zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgFlagOff.displayName = "SvgFlagOff";

export default SvgFlagOff;
