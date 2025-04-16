import * as React from "react";

interface SvgArrowBigDownProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowBigDown = React.forwardRef<SVGSVGElement, SvgArrowBigDownProps>(
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
      <path d="M4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM3 3h1v1H3zM8 3h1v1H8zM3 4h1v1H3zM8 4h1v1H8zM3 5h1v1H3zM8 5h1v1H8zM1 6h1v1H1zM2 6h1v1H2zM9 6h1v1H9zM10 6h1v1h-1zM2 7h1v1H2zM9 7h1v1H9zM3 8h1v1H3zM8 8h1v1H8zM4 9h1v1H4zM7 9h1v1H7zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgArrowBigDown.displayName = "SvgArrowBigDown";

export default SvgArrowBigDown;
