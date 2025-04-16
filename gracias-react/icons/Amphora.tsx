import * as React from "react";

interface SvgAmphoraProps extends React.SVGAttributes<SVGElement> {}

const SvgAmphora = React.forwardRef<SVGSVGElement, SvgAmphoraProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM4 2h1v1H4zM7 2h1v1H7zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM1 4h1v1H1zM3 4h1v1H3zM8 4h1v1H8zM10 4h1v1h-1zM2 5h1v1H2zM9 5h1v1H9zM2 6h1v1H2zM9 6h1v1H9zM2 7h1v1H2zM9 7h1v1H9zM3 8h1v1H3zM8 8h1v1H8zM4 9h1v1H4zM7 9h1v1H7zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgAmphora.displayName = "SvgAmphora";

export default SvgAmphora;
