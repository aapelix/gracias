import * as React from "react";

interface SvgDice3Props extends React.SVGAttributes<SVGElement> {}

const SvgDice3 = React.forwardRef<SVGSVGElement, SvgDice3Props>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM1 2h1v1H1zM9 2h1v1H9zM1 3h1v1H1zM7 3h1v1H7zM9 3h1v1H9zM1 4h1v1H1zM9 4h1v1H9zM1 5h1v1H1zM5 5h1v1H5zM9 5h1v1H9zM1 6h1v1H1zM9 6h1v1H9zM1 7h1v1H1zM3 7h1v1H3zM9 7h1v1H9zM1 8h1v1H1zM9 8h1v1H9zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8z" />
    </svg>
  )
);

SvgDice3.displayName = "SvgDice3";

export default SvgDice3;
