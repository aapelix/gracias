import * as React from "react";

interface SvgAwardProps extends React.SVGAttributes<SVGElement> {}

const SvgAward = React.forwardRef<SVGSVGElement, SvgAwardProps>(
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
      <path d="M5 1h1v1H5zM6 1h1v1H6zM4 2h1v1H4zM7 2h1v1H7zM3 3h1v1H3zM8 3h1v1H8zM3 4h1v1H3zM8 4h1v1H8zM4 5h1v1H4zM7 5h1v1H7zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM3 7h1v1H3zM8 7h1v1H8zM3 8h1v1H3zM8 8h1v1H8zM3 9h1v1H3zM5 9h1v1H5zM6 9h1v1H6zM8 9h1v1H8zM3 10h1v1H3zM4 10h1v1H4zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgAward.displayName = "SvgAward";

export default SvgAward;
