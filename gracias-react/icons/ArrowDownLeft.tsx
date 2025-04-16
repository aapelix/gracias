import * as React from "react";

interface SvgArrowDownLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowDownLeft = React.forwardRef<SVGSVGElement, SvgArrowDownLeftProps>(
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
      <path d="M8 3h1v1H8zM2 4h1v1H2zM7 4h1v1H7zM2 5h1v1H2zM6 5h1v1H6zM2 6h1v1H2zM5 6h1v1H5zM2 7h1v1H2zM4 7h1v1H4zM2 8h1v1H2zM3 8h1v1H3zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7z" />
    </svg>
  )
);

SvgArrowDownLeft.displayName = "SvgArrowDownLeft";

export default SvgArrowDownLeft;
