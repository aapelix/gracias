import * as React from "react";

interface SvgAccessibilityProps extends React.SVGAttributes<SVGElement> {}

const SvgAccessibility = React.forwardRef<SVGSVGElement, SvgAccessibilityProps>(
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
      <path d="M7 1h1v1H7zM8 1h1v1H8zM3 2h1v1H3zM4 2h1v1H4zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM2 3h1v1H2zM5 3h1v1H5zM6 3h1v1H6zM6 4h1v1H6zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM8 5h1v1H8zM9 5h1v1H9zM6 6h1v1H6zM7 6h1v1H7zM9 6h1v1H9zM2 7h1v1H2zM7 7h1v1H7zM9 7h1v1H9zM2 8h1v1H2zM7 8h1v1H7zM9 8h1v1H9zM3 9h1v1H3zM9 9h1v1H9zM4 10h1v1H4zM5 10h1v1H5z" />
    </svg>
  )
);

SvgAccessibility.displayName = "SvgAccessibility";

export default SvgAccessibility;
