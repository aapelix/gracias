import * as React from "react";

interface SvgFigmaProps extends React.SVGAttributes<SVGElement> {}

const SvgFigma = React.forwardRef<SVGSVGElement, SvgFigmaProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM2 2h1v1H2zM5 2h1v1H5zM8 2h1v1H8zM2 3h1v1H2zM5 3h1v1H5zM8 3h1v1H8zM3 4h1v1H3zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM7 4h1v1H7zM2 5h1v1H2zM5 5h1v1H5zM8 5h1v1H8zM2 6h1v1H2zM5 6h1v1H5zM6 6h1v1H6zM8 6h1v1H8zM3 7h1v1H3zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM2 8h1v1H2zM5 8h1v1H5zM2 9h1v1H2zM5 9h1v1H5zM3 10h1v1H3zM4 10h1v1H4z" />
    </svg>
  )
);

SvgFigma.displayName = "SvgFigma";

export default SvgFigma;
