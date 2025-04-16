import * as React from "react";

interface SvgBotMessageSquareProps extends React.SVGAttributes<SVGElement> {}

const SvgBotMessageSquare = React.forwardRef<SVGSVGElement, SvgBotMessageSquareProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM5 2h1v1H5zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM2 4h1v1H2zM9 4h1v1H9zM2 5h1v1H2zM4 5h1v1H4zM7 5h1v1H7zM9 5h1v1H9zM1 6h1v1H1zM2 6h1v1H2zM4 6h1v1H4zM7 6h1v1H7zM9 6h1v1H9zM10 6h1v1h-1zM2 7h1v1H2zM9 7h1v1H9zM2 8h1v1H2zM9 8h1v1H9zM2 9h1v1H2zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM2 10h1v1H2zM4 10h1v1H4zM2 11h1v1H2zM3 11h1v1H3z" />
    </svg>
  )
);

SvgBotMessageSquare.displayName = "SvgBotMessageSquare";

export default SvgBotMessageSquare;
