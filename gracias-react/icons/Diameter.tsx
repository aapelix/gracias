import * as React from "react";

interface SvgDiameterProps extends React.SVGAttributes<SVGElement> {}

const SvgDiameter = React.forwardRef<SVGSVGElement, SvgDiameterProps>(
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
      <path d="M3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM2 3h1v1H2zM4 3h1v1H4zM8 3h1v1H8zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM9 4h1v1H9zM2 5h1v1H2zM5 5h1v1H5zM9 5h1v1H9zM2 6h1v1H2zM6 6h1v1H6zM9 6h1v1H9zM2 7h1v1H2zM7 7h1v1H7zM8 7h1v1H8zM9 7h1v1H9zM3 8h1v1H3zM7 8h1v1H7zM9 8h1v1H9zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8z" />
    </svg>
  )
);

SvgDiameter.displayName = "SvgDiameter";

export default SvgDiameter;
