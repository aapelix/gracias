import * as React from "react";

interface SvgChevronUpProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronUp = React.forwardRef<SVGSVGElement, SvgChevronUpProps>(
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
      <path d="M5 4h1v1H5zM4 5h1v1H4zM6 5h1v1H6zM3 6h1v1H3zM7 6h1v1H7zM2 7h1v1H2zM8 7h1v1H8z" />
    </svg>
  )
);

SvgChevronUp.displayName = "SvgChevronUp";

export default SvgChevronUp;
