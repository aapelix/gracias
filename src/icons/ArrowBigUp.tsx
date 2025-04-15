import * as React from "react";

interface SvgArrowBigUpProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowBigUp = React.forwardRef<SVGSVGElement, SvgArrowBigUpProps>(
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
      <path d="M5 1h1v1H5zM6 1h1v1H6zM4 2h1v1H4zM7 2h1v1H7zM3 3h1v1H3zM8 3h1v1H8zM2 4h1v1H2zM9 4h1v1H9zM1 5h1v1H1zM2 5h1v1H2zM9 5h1v1H9zM10 5h1v1h-1zM3 6h1v1H3zM8 6h1v1H8zM3 7h1v1H3zM8 7h1v1H8zM3 8h1v1H3zM8 8h1v1H8zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7z" />
    </svg>
  )
);

SvgArrowBigUp.displayName = "SvgArrowBigUp";

export default SvgArrowBigUp;
