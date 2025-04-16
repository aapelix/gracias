import * as React from "react";

interface SvgBringToFrontProps extends React.SVGAttributes<SVGElement> {}

const SvgBringToFront = React.forwardRef<SVGSVGElement, SvgBringToFrontProps>(
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
      <path d="M1 1h1v1H1zM2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM1 2h1v1H1zM5 2h1v1H5zM1 3h1v1H1zM1 4h1v1H1zM5 4h1v1H5zM6 4h1v1H6zM2 5h1v1H2zM4 5h1v1H4zM7 5h1v1H7zM4 6h1v1H4zM7 6h1v1H7zM9 6h1v1H9zM5 7h1v1H5zM6 7h1v1H6zM10 7h1v1h-1zM10 8h1v1h-1zM6 9h1v1H6zM10 9h1v1h-1zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgBringToFront.displayName = "SvgBringToFront";

export default SvgBringToFront;
