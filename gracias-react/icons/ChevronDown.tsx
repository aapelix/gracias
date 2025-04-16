import * as React from "react";

interface SvgChevronDownProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronDown = React.forwardRef<SVGSVGElement, SvgChevronDownProps>(
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
      <path d="M2 5h1v1H2zM8 5h1v1H8zM3 6h1v1H3zM7 6h1v1H7zM4 7h1v1H4zM6 7h1v1H6zM5 8h1v1H5z" />
    </svg>
  )
);

SvgChevronDown.displayName = "SvgChevronDown";

export default SvgChevronDown;
