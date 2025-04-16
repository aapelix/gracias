import * as React from "react";

interface SvgArrowBigRightProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowBigRight = React.forwardRef<SVGSVGElement, SvgArrowBigRightProps>(
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
      <path d="M6 1h1v1H6zM6 2h1v1H6zM7 2h1v1H7zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM8 3h1v1H8zM2 4h1v1H2zM9 4h1v1H9zM2 5h1v1H2zM10 5h1v1h-1zM2 6h1v1H2zM10 6h1v1h-1zM2 7h1v1H2zM9 7h1v1H9zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM8 8h1v1H8zM6 9h1v1H6zM7 9h1v1H7zM6 10h1v1H6z" />
    </svg>
  )
);

SvgArrowBigRight.displayName = "SvgArrowBigRight";

export default SvgArrowBigRight;
