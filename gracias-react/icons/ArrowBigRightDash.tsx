import * as React from "react";

interface SvgArrowBigRightDashProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowBigRightDash = React.forwardRef<SVGSVGElement, SvgArrowBigRightDashProps>(
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
      <path d="M6 1h1v1H6zM6 2h1v1H6zM7 2h1v1H7zM4 3h1v1H4zM5 3h1v1H5zM8 3h1v1H8zM1 4h1v1H1zM3 4h1v1H3zM9 4h1v1H9zM1 5h1v1H1zM3 5h1v1H3zM10 5h1v1h-1zM1 6h1v1H1zM3 6h1v1H3zM10 6h1v1h-1zM1 7h1v1H1zM3 7h1v1H3zM9 7h1v1H9zM4 8h1v1H4zM5 8h1v1H5zM8 8h1v1H8zM6 9h1v1H6zM7 9h1v1H7zM6 10h1v1H6z" />
    </svg>
  )
);

SvgArrowBigRightDash.displayName = "SvgArrowBigRightDash";

export default SvgArrowBigRightDash;
