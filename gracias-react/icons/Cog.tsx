import * as React from "react";

interface SvgCogProps extends React.SVGAttributes<SVGElement> {}

const SvgCog = React.forwardRef<SVGSVGElement, SvgCogProps>(
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
      <path d="M3 0h1v1H3zM5 0h1v1H5zM7 0h1v1H7zM1 1h1v1H1zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM9 1h1v1H9zM2 2h1v1H2zM3 2h1v1H3zM8 2h1v1H8zM0 3h1v1H0zM1 3h1v1H1zM3 3h1v1H3zM9 3h1v1H9zM10 3h1v1h-1zM1 4h1v1H1zM4 4h1v1H4zM5 4h1v1H5zM9 4h1v1H9zM0 5h1v1H0zM1 5h1v1H1zM4 5h1v1H4zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM5 6h1v1H5zM9 6h1v1H9zM0 7h1v1H0zM1 7h1v1H1zM4 7h1v1H4zM9 7h1v1H9zM10 7h1v1h-1zM2 8h1v1H2zM3 8h1v1H3zM8 8h1v1H8zM1 9h1v1H1zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM9 9h1v1H9zM3 10h1v1H3zM5 10h1v1H5zM7 10h1v1H7z" />
    </svg>
  )
);

SvgCog.displayName = "SvgCog";

export default SvgCog;
