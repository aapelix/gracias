import * as React from "react";

interface SvgArrowBigLeftDashProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowBigLeftDash = React.forwardRef<SVGSVGElement, SvgArrowBigLeftDashProps>(
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
      <path d="M5 1h1v1H5zM4 2h1v1H4zM5 2h1v1H5zM3 3h1v1H3zM6 3h1v1H6zM7 3h1v1H7zM2 4h1v1H2zM8 4h1v1H8zM10 4h1v1h-1zM1 5h1v1H1zM8 5h1v1H8zM10 5h1v1h-1zM1 6h1v1H1zM8 6h1v1H8zM10 6h1v1h-1zM2 7h1v1H2zM8 7h1v1H8zM10 7h1v1h-1zM3 8h1v1H3zM6 8h1v1H6zM7 8h1v1H7zM4 9h1v1H4zM5 9h1v1H5zM5 10h1v1H5z" />
    </svg>
  )
);

SvgArrowBigLeftDash.displayName = "SvgArrowBigLeftDash";

export default SvgArrowBigLeftDash;
