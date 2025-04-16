import * as React from "react";

interface SvgArrowDownProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowDown = React.forwardRef<SVGSVGElement, SvgArrowDownProps>(
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
      <path d="M5 2h1v1H5zM5 3h1v1H5zM5 4h1v1H5zM5 5h1v1H5zM2 6h1v1H2zM5 6h1v1H5zM8 6h1v1H8zM3 7h1v1H3zM5 7h1v1H5zM7 7h1v1H7zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM5 9h1v1H5z" />
    </svg>
  )
);

SvgArrowDown.displayName = "SvgArrowDown";

export default SvgArrowDown;
