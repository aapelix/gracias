import * as React from "react";

interface SvgArrowBigLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowBigLeft = React.forwardRef<SVGSVGElement, SvgArrowBigLeftProps>(
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
      <path d="M5 1h1v1H5zM4 2h1v1H4zM5 2h1v1H5zM3 3h1v1H3zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM2 4h1v1H2zM9 4h1v1H9zM1 5h1v1H1zM9 5h1v1H9zM1 6h1v1H1zM9 6h1v1H9zM2 7h1v1H2zM9 7h1v1H9zM3 8h1v1H3zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM4 9h1v1H4zM5 9h1v1H5zM5 10h1v1H5z" />
    </svg>
  )
);

SvgArrowBigLeft.displayName = "SvgArrowBigLeft";

export default SvgArrowBigLeft;
