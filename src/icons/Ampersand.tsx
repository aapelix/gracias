import * as React from "react";

interface SvgAmpersandProps extends React.SVGAttributes<SVGElement> {}

const SvgAmpersand = React.forwardRef<SVGSVGElement, SvgAmpersandProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM2 2h1v1H2zM6 2h1v1H6zM2 3h1v1H2zM6 3h1v1H6zM2 4h1v1H2zM5 4h1v1H5zM3 5h1v1H3zM4 5h1v1H4zM8 5h1v1H8zM9 5h1v1H9zM10 5h1v1h-1zM2 6h1v1H2zM3 6h1v1H3zM5 6h1v1H5zM9 6h1v1H9zM1 7h1v1H1zM5 7h1v1H5zM9 7h1v1H9zM1 8h1v1H1zM6 8h1v1H6zM8 8h1v1H8zM1 9h1v1H1zM6 9h1v1H6zM7 9h1v1H7zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgAmpersand.displayName = "SvgAmpersand";

export default SvgAmpersand;
