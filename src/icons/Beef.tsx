import * as React from "react";

interface SvgBeefProps extends React.SVGAttributes<SVGElement> {}

const SvgBeef = React.forwardRef<SVGSVGElement, SvgBeefProps>(
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
      <path d="M4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM3 2h1v1H3zM8 2h1v1H8zM3 3h1v1H3zM5 3h1v1H5zM6 3h1v1H6zM8 3h1v1H8zM3 4h1v1H3zM5 4h1v1H5zM6 4h1v1H6zM9 4h1v1H9zM2 5h1v1H2zM9 5h1v1H9zM1 6h1v1H1zM8 6h1v1H8zM9 6h1v1H9zM1 7h1v1H1zM7 7h1v1H7zM9 7h1v1H9zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM8 8h1v1H8zM2 9h1v1H2zM7 9h1v1H7zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgBeef.displayName = "SvgBeef";

export default SvgBeef;
