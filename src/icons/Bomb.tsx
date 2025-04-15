import * as React from "react";

interface SvgBombProps extends React.SVGAttributes<SVGElement> {}

const SvgBomb = React.forwardRef<SVGSVGElement, SvgBombProps>(
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
      <path d="M10 1h1v1h-1zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM9 3h1v1H9zM2 4h1v1H2zM7 4h1v1H7zM9 4h1v1H9zM1 5h1v1H1zM8 5h1v1H8zM1 6h1v1H1zM8 6h1v1H8zM1 7h1v1H1zM8 7h1v1H8zM1 8h1v1H1zM8 8h1v1H8zM2 9h1v1H2zM7 9h1v1H7zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgBomb.displayName = "SvgBomb";

export default SvgBomb;
