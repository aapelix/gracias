import * as React from "react";

interface SvgTreeDeciduousProps extends React.SVGAttributes<SVGElement> {}

const SvgTreeDeciduous = React.forwardRef<SVGSVGElement, SvgTreeDeciduousProps>(
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
      <path d="M4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM3 2h1v1H3zM7 2h1v1H7zM2 3h1v1H2zM3 3h1v1H3zM7 3h1v1H7zM8 3h1v1H8zM1 4h1v1H1zM9 4h1v1H9zM1 5h1v1H1zM9 5h1v1H9zM2 6h1v1H2zM3 6h1v1H3zM7 6h1v1H7zM8 6h1v1H8zM1 7h1v1H1zM9 7h1v1H9zM1 8h1v1H1zM9 8h1v1H9zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM5 10h1v1H5z" />
    </svg>
  )
);

SvgTreeDeciduous.displayName = "SvgTreeDeciduous";

export default SvgTreeDeciduous;
