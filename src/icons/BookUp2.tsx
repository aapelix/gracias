import * as React from "react";

interface SvgBookUp2Props extends React.SVGAttributes<SVGElement> {}

const SvgBookUp2 = React.forwardRef<SVGSVGElement, SvgBookUp2Props>(
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
      <path d="M3 1h1v1H3zM6 1h1v1H6zM9 1h1v1H9zM2 2h1v1H2zM5 2h1v1H5zM7 2h1v1H7zM9 2h1v1H9zM2 3h1v1H2zM6 3h1v1H6zM9 3h1v1H9zM2 4h1v1H2zM5 4h1v1H5zM6 4h1v1H6zM7 4h1v1H7zM9 4h1v1H9zM2 5h1v1H2zM6 5h1v1H6zM9 5h1v1H9zM2 6h1v1H2zM6 6h1v1H6zM9 6h1v1H9zM2 7h1v1H2zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM8 7h1v1H8zM9 7h1v1H9zM2 8h1v1H2zM3 8h1v1H3zM9 8h1v1H9zM2 9h1v1H2zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgBookUp2.displayName = "SvgBookUp2";

export default SvgBookUp2;
