import * as React from "react";

interface SvgBoltProps extends React.SVGAttributes<SVGElement> {}

const SvgBolt = React.forwardRef<SVGSVGElement, SvgBoltProps>(
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
      <path d="M5 1h1v1H5zM6 1h1v1H6zM3 2h1v1H3zM4 2h1v1H4zM7 2h1v1H7zM8 2h1v1H8zM1 3h1v1H1zM2 3h1v1H2zM9 3h1v1H9zM10 3h1v1h-1zM1 4h1v1H1zM5 4h1v1H5zM6 4h1v1H6zM10 4h1v1h-1zM1 5h1v1H1zM4 5h1v1H4zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM7 6h1v1H7zM10 6h1v1h-1zM1 7h1v1H1zM5 7h1v1H5zM6 7h1v1H6zM10 7h1v1h-1zM1 8h1v1H1zM2 8h1v1H2zM9 8h1v1H9zM10 8h1v1h-1zM3 9h1v1H3zM4 9h1v1H4zM7 9h1v1H7zM8 9h1v1H8zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgBolt.displayName = "SvgBolt";

export default SvgBolt;
