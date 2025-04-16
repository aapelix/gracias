import * as React from "react";

interface SvgChevronDownUpProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronDownUp = React.forwardRef<SVGSVGElement, SvgChevronDownUpProps>(
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
      <path d="M2 1h1v1H2zM8 1h1v1H8zM3 2h1v1H3zM7 2h1v1H7zM4 3h1v1H4zM6 3h1v1H6zM5 4h1v1H5zM5 7h1v1H5zM4 8h1v1H4zM6 8h1v1H6zM3 9h1v1H3zM7 9h1v1H7zM2 10h1v1H2zM8 10h1v1H8z" />
    </svg>
  )
);

SvgChevronDownUp.displayName = "SvgChevronDownUp";

export default SvgChevronDownUp;
