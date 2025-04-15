import * as React from "react";

interface SvgSunDimProps extends React.SVGAttributes<SVGElement> {}

const SvgSunDim = React.forwardRef<SVGSVGElement, SvgSunDimProps>(
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
      <path d="M6 1h1v1H6zM3 2h1v1H3zM5 3h1v1H5zM6 3h1v1H6zM9 3h1v1H9zM4 4h1v1H4zM7 4h1v1H7zM1 5h1v1H1zM3 5h1v1H3zM8 5h1v1H8zM3 6h1v1H3zM8 6h1v1H8zM10 6h1v1h-1zM4 7h1v1H4zM7 7h1v1H7zM2 8h1v1H2zM5 8h1v1H5zM6 8h1v1H6zM8 9h1v1H8zM5 10h1v1H5z" />
    </svg>
  )
);

SvgSunDim.displayName = "SvgSunDim";

export default SvgSunDim;
