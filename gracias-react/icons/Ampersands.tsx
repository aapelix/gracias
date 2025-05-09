import * as React from "react";

interface SvgAmpersandsProps extends React.SVGAttributes<SVGElement> {}

const SvgAmpersands = React.forwardRef<SVGSVGElement, SvgAmpersandsProps>(
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
      <path d="M2 2h1v1H2zM7 2h1v1H7zM1 3h1v1H1zM3 3h1v1H3zM6 3h1v1H6zM8 3h1v1H8zM1 4h1v1H1zM3 4h1v1H3zM6 4h1v1H6zM8 4h1v1H8zM2 5h1v1H2zM7 5h1v1H7zM1 6h1v1H1zM2 6h1v1H2zM4 6h1v1H4zM6 6h1v1H6zM8 6h1v1H8zM10 6h1v1h-1zM1 7h1v1H1zM3 7h1v1H3zM4 7h1v1H4zM6 7h1v1H6zM8 7h1v1H8zM9 7h1v1H9zM10 7h1v1h-1zM1 8h1v1H1zM3 8h1v1H3zM4 8h1v1H4zM6 8h1v1H6zM8 8h1v1H8zM9 8h1v1H9zM2 9h1v1H2zM7 9h1v1H7z" />
    </svg>
  )
);

SvgAmpersands.displayName = "SvgAmpersands";

export default SvgAmpersands;
