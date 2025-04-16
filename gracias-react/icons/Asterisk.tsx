import * as React from "react";

interface SvgAsteriskProps extends React.SVGAttributes<SVGElement> {}

const SvgAsterisk = React.forwardRef<SVGSVGElement, SvgAsteriskProps>(
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
      <path d="M5 3h1v1H5zM2 4h1v1H2zM5 4h1v1H5zM8 4h1v1H8zM3 5h1v1H3zM5 5h1v1H5zM7 5h1v1H7zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM3 7h1v1H3zM5 7h1v1H5zM7 7h1v1H7zM2 8h1v1H2zM5 8h1v1H5zM8 8h1v1H8zM5 9h1v1H5z" />
    </svg>
  )
);

SvgAsterisk.displayName = "SvgAsterisk";

export default SvgAsterisk;
