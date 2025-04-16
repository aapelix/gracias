import * as React from "react";

interface SvgArrowRightProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowRight = React.forwardRef<SVGSVGElement, SvgArrowRightProps>(
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
      <path d="M6 3h1v1H6zM7 4h1v1H7zM8 5h1v1H8zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM9 6h1v1H9zM8 7h1v1H8zM7 8h1v1H7zM6 9h1v1H6z" />
    </svg>
  )
);

SvgArrowRight.displayName = "SvgArrowRight";

export default SvgArrowRight;
