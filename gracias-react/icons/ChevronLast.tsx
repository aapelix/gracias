import * as React from "react";

interface SvgChevronLastProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronLast = React.forwardRef<SVGSVGElement, SvgChevronLastProps>(
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
      <path d="M3 2h1v1H3zM8 2h1v1H8zM4 3h1v1H4zM8 3h1v1H8zM5 4h1v1H5zM8 4h1v1H8zM6 5h1v1H6zM8 5h1v1H8zM5 6h1v1H5zM8 6h1v1H8zM4 7h1v1H4zM8 7h1v1H8zM3 8h1v1H3zM8 8h1v1H8z" />
    </svg>
  )
);

SvgChevronLast.displayName = "SvgChevronLast";

export default SvgChevronLast;
