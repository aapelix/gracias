import * as React from "react";

interface SvgArrowRightLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowRightLeft = React.forwardRef<SVGSVGElement, SvgArrowRightLeftProps>(
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
      <path d="M7 1h1v1H7zM8 2h1v1H8zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM8 4h1v1H8zM7 5h1v1H7zM4 6h1v1H4zM3 7h1v1H3zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM3 9h1v1H3zM4 10h1v1H4z" />
    </svg>
  )
);

SvgArrowRightLeft.displayName = "SvgArrowRightLeft";

export default SvgArrowRightLeft;
