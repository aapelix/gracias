import * as React from "react";

interface SvgBadgePlusProps extends React.SVGAttributes<SVGElement> {}

const SvgBadgePlus = React.forwardRef<SVGSVGElement, SvgBadgePlusProps>(
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
      <path d="M4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM2 3h1v1H2zM3 3h1v1H3zM7 3h1v1H7zM8 3h1v1H8zM2 4h1v1H2zM8 4h1v1H8zM1 5h1v1H1zM5 5h1v1H5zM9 5h1v1H9zM1 6h1v1H1zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM9 6h1v1H9zM1 7h1v1H1zM5 7h1v1H5zM9 7h1v1H9zM2 8h1v1H2zM8 8h1v1H8zM2 9h1v1H2zM3 9h1v1H3zM7 9h1v1H7zM8 9h1v1H8zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgBadgePlus.displayName = "SvgBadgePlus";

export default SvgBadgePlus;
