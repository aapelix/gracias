import * as React from "react";

interface SvgBandageProps extends React.SVGAttributes<SVGElement> {}

const SvgBandage = React.forwardRef<SVGSVGElement, SvgBandageProps>(
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
      <path d="M2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM1 4h1v1H1zM3 4h1v1H3zM8 4h1v1H8zM10 4h1v1h-1zM1 5h1v1H1zM3 5h1v1H3zM5 5h1v1H5zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1h-1zM1 6h1v1H1zM3 6h1v1H3zM8 6h1v1H8zM10 6h1v1h-1zM1 7h1v1H1zM3 7h1v1H3zM5 7h1v1H5zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM1 8h1v1H1zM3 8h1v1H3zM8 8h1v1H8zM10 8h1v1h-1zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9z" />
    </svg>
  )
);

SvgBandage.displayName = "SvgBandage";

export default SvgBandage;
