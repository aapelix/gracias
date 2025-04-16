import * as React from "react";

interface SvgALargeSmallProps extends React.SVGAttributes<SVGElement> {}

const SvgALargeSmall = React.forwardRef<SVGSVGElement, SvgALargeSmallProps>(
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
      <path d="M1 3h1v1H1zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM1 4h1v1H1zM4 4h1v1H4zM1 5h1v1H1zM4 5h1v1H4zM8 5h1v1H8zM9 5h1v1H9zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM7 6h1v1H7zM10 6h1v1h-1zM1 7h1v1H1zM4 7h1v1H4zM7 7h1v1H7zM8 7h1v1H8zM9 7h1v1H9zM10 7h1v1h-1zM1 8h1v1H1zM4 8h1v1H4zM7 8h1v1H7zM10 8h1v1h-1z" />
    </svg>
  )
);

SvgALargeSmall.displayName = "SvgALargeSmall";

export default SvgALargeSmall;
