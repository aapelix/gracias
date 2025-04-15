import * as React from "react";

interface SvgBlendProps extends React.SVGAttributes<SVGElement> {}

const SvgBlend = React.forwardRef<SVGSVGElement, SvgBlendProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM2 2h1v1H2zM6 2h1v1H6zM1 3h1v1H1zM7 3h1v1H7zM1 4h1v1H1zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM1 5h1v1H1zM5 5h1v1H5zM7 5h1v1H7zM9 5h1v1H9zM2 6h1v1H2zM4 6h1v1H4zM6 6h1v1H6zM10 6h1v1h-1zM3 7h1v1H3zM4 7h1v1H4zM5 7h1v1H5zM10 7h1v1h-1zM4 8h1v1H4zM10 8h1v1h-1zM5 9h1v1H5zM9 9h1v1H9zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgBlend.displayName = "SvgBlend";

export default SvgBlend;
