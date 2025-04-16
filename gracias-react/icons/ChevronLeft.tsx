import * as React from "react";

interface SvgChevronLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronLeft = React.forwardRef<SVGSVGElement, SvgChevronLeftProps>(
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
      <path d="M6 2h1v1H6zM5 3h1v1H5zM4 4h1v1H4zM3 5h1v1H3zM4 6h1v1H4zM5 7h1v1H5zM6 8h1v1H6z" />
    </svg>
  )
);

SvgChevronLeft.displayName = "SvgChevronLeft";

export default SvgChevronLeft;
