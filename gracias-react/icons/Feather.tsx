import * as React from "react";

interface SvgFeatherProps extends React.SVGAttributes<SVGElement> {}

const SvgFeather = React.forwardRef<SVGSVGElement, SvgFeatherProps>(
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
      <path d="M6 0h1v1H6zM7 0h1v1H7zM8 0h1v1H8zM5 1h1v1H5zM9 1h1v1H9zM4 2h1v1H4zM10 2h1v1h-1zM3 3h1v1H3zM7 3h1v1H7zM10 3h1v1h-1zM2 4h1v1H2zM6 4h1v1H6zM10 4h1v1h-1zM2 5h1v1H2zM5 5h1v1H5zM9 5h1v1H9zM2 6h1v1H2zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM2 7h1v1H2zM3 7h1v1H3zM7 7h1v1H7zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM1 9h1v1H1zM0 10h1v1H0z" />
    </svg>
  )
);

SvgFeather.displayName = "SvgFeather";

export default SvgFeather;
