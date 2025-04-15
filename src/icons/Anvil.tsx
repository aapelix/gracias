import * as React from "react";

interface SvgAnvilProps extends React.SVGAttributes<SVGElement> {}

const SvgAnvil = React.forwardRef<SVGSVGElement, SvgAnvilProps>(
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
      <path d="M4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM10 2h1v1h-1zM1 3h1v1H1zM2 3h1v1H2zM3 3h1v1H3zM10 3h1v1h-1zM1 4h1v1H1zM3 4h1v1H3zM10 4h1v1h-1zM2 5h1v1H2zM3 5h1v1H3zM9 5h1v1H9zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM4 7h1v1H4zM7 7h1v1H7zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM2 9h1v1H2zM9 9h1v1H9zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgAnvil.displayName = "SvgAnvil";

export default SvgAnvil;
