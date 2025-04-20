import * as React from "react";

interface SvgEarOffProps extends React.SVGAttributes<SVGElement> {}

const SvgEarOff = React.forwardRef<SVGSVGElement, SvgEarOffProps>(
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
      <path d="M1 1h1v1H1zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM2 2h1v1H2zM7 2h1v1H7zM2 3h1v1H2zM3 3h1v1H3zM8 3h1v1H8zM2 4h1v1H2zM4 4h1v1H4zM8 4h1v1H8zM4 5h1v1H4zM5 5h1v1H5zM8 5h1v1H8zM5 6h1v1H5zM6 6h1v1H6zM4 7h1v1H4zM7 7h1v1H7zM2 8h1v1H2zM6 8h1v1H6zM8 8h1v1H8zM2 9h1v1H2zM6 9h1v1H6zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgEarOff.displayName = "SvgEarOff";

export default SvgEarOff;
