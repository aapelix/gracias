import * as React from "react";

interface SvgCopyCheckProps extends React.SVGAttributes<SVGElement> {}

const SvgCopyCheck = React.forwardRef<SVGSVGElement, SvgCopyCheckProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM1 2h1v1H1zM1 3h1v1H1zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM1 4h1v1H1zM4 4h1v1H4zM10 4h1v1h-1zM1 5h1v1H1zM4 5h1v1H4zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM9 6h1v1H9zM10 6h1v1h-1zM1 7h1v1H1zM4 7h1v1H4zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM2 8h1v1H2zM4 8h1v1H4zM7 8h1v1H7zM10 8h1v1h-1zM4 9h1v1H4zM10 9h1v1h-1zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgCopyCheck.displayName = "SvgCopyCheck";

export default SvgCopyCheck;
