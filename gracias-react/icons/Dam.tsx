import * as React from "react";

interface SvgDamProps extends React.SVGAttributes<SVGElement> {}

const SvgDam = React.forwardRef<SVGSVGElement, SvgDamProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM1 2h1v1H1zM2 2h1v1H2zM3 2h1v1H3zM5 2h1v1H5zM3 3h1v1H3zM5 3h1v1H5zM1 4h1v1H1zM2 4h1v1H2zM3 4h1v1H3zM5 4h1v1H5zM3 5h1v1H3zM5 5h1v1H5zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM6 6h1v1H6zM7 6h1v1H7zM9 6h1v1H9zM3 7h1v1H3zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM1 8h1v1H1zM2 8h1v1H2zM3 8h1v1H3zM6 8h1v1H6zM3 9h1v1H3zM6 9h1v1H6zM7 9h1v1H7zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM8 10h1v1H8zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgDam.displayName = "SvgDam";

export default SvgDam;
