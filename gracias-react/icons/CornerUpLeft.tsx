import * as React from "react";

interface SvgCornerUpLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgCornerUpLeft = React.forwardRef<SVGSVGElement, SvgCornerUpLeftProps>(
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
      <path d="M3 1h1v1H3zM2 2h1v1H2zM1 3h1v1H1zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM2 4h1v1H2zM9 4h1v1H9zM3 5h1v1H3zM9 5h1v1H9zM9 6h1v1H9zM9 7h1v1H9zM9 8h1v1H9zM9 9h1v1H9z" />
    </svg>
  )
);

SvgCornerUpLeft.displayName = "SvgCornerUpLeft";

export default SvgCornerUpLeft;
