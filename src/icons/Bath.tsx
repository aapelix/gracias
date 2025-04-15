import * as React from "react";

interface SvgBathProps extends React.SVGAttributes<SVGElement> {}

const SvgBath = React.forwardRef<SVGSVGElement, SvgBathProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM2 2h1v1H2zM4 2h1v1H4zM2 3h1v1H2zM2 4h1v1H2zM1 5h1v1H1zM2 5h1v1H2zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM10 5h1v1h-1zM2 6h1v1H2zM9 6h1v1H9zM2 7h1v1H2zM9 7h1v1H9zM2 8h1v1H2zM9 8h1v1H9zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM3 10h1v1H3zM8 10h1v1H8z" />
    </svg>
  )
);

SvgBath.displayName = "SvgBath";

export default SvgBath;
