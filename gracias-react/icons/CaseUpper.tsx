import * as React from "react";

interface SvgCaseUpperProps extends React.SVGAttributes<SVGElement> {}

const SvgCaseUpper = React.forwardRef<SVGSVGElement, SvgCaseUpperProps>(
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
      <path d="M3 2h1v1H3zM4 2h1v1H4zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM2 3h1v1H2zM5 3h1v1H5zM7 3h1v1H7zM10 3h1v1h-1zM2 4h1v1H2zM5 4h1v1H5zM7 4h1v1H7zM10 4h1v1h-1zM2 5h1v1H2zM5 5h1v1H5zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM7 6h1v1H7zM10 6h1v1h-1zM2 7h1v1H2zM5 7h1v1H5zM7 7h1v1H7zM10 7h1v1h-1zM2 8h1v1H2zM5 8h1v1H5zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9z" />
    </svg>
  )
);

SvgCaseUpper.displayName = "SvgCaseUpper";

export default SvgCaseUpper;
