import * as React from "react";

interface SvgBananaProps extends React.SVGAttributes<SVGElement> {}

const SvgBanana = React.forwardRef<SVGSVGElement, SvgBananaProps>(
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
      <path d="M6 1h1v1H6zM5 2h1v1H5zM7 2h1v1H7zM5 3h1v1H5zM8 3h1v1H8zM5 4h1v1H5zM8 4h1v1H8zM5 5h1v1H5zM8 5h1v1H8zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM8 6h1v1H8zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM8 7h1v1H8zM2 8h1v1H2zM3 8h1v1H3zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM1 9h1v1H1zM6 9h1v1H6zM10 9h1v1h-1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5z" />
    </svg>
  )
);

SvgBanana.displayName = "SvgBanana";

export default SvgBanana;
