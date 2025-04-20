import * as React from "react";

interface SvgFlashlightOffProps extends React.SVGAttributes<SVGElement> {}

const SvgFlashlightOff = React.forwardRef<SVGSVGElement, SvgFlashlightOffProps>(
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
      <path d="M1 1h1v1H1zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM2 2h1v1H2zM8 2h1v1H8zM2 3h1v1H2zM3 3h1v1H3zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM2 4h1v1H2zM4 4h1v1H4zM8 4h1v1H8zM2 5h1v1H2zM3 5h1v1H3zM5 5h1v1H5zM3 6h1v1H3zM6 6h1v1H6zM7 6h1v1H7zM3 7h1v1H3zM5 7h1v1H5zM7 7h1v1H7zM3 8h1v1H3zM7 8h1v1H7zM8 8h1v1H8zM3 9h1v1H3zM7 9h1v1H7zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgFlashlightOff.displayName = "SvgFlashlightOff";

export default SvgFlashlightOff;
