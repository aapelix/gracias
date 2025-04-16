import * as React from "react";

interface SvgCrownProps extends React.SVGAttributes<SVGElement> {}

const SvgCrown = React.forwardRef<SVGSVGElement, SvgCrownProps>(
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
      <path d="M6 1h1v1H6zM1 2h1v1H1zM5 2h1v1H5zM7 2h1v1H7zM10 2h1v1h-1zM1 3h1v1H1zM2 3h1v1H2zM4 3h1v1H4zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM10 3h1v1h-1zM1 4h1v1H1zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM8 4h1v1H8zM10 4h1v1h-1zM1 5h1v1H1zM10 5h1v1h-1zM1 6h1v1H1zM2 6h1v1H2zM10 6h1v1h-1zM2 7h1v1H2zM9 7h1v1H9zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgCrown.displayName = "SvgCrown";

export default SvgCrown;
