import * as React from "react";

interface SvgArrowLeftToLineProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowLeftToLine = React.forwardRef<SVGSVGElement, SvgArrowLeftToLineProps>(
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
      <path d="M1 3h1v1H1zM6 3h1v1H6zM1 4h1v1H1zM5 4h1v1H5zM1 5h1v1H1zM4 5h1v1H4zM1 6h1v1H1zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM9 6h1v1H9zM1 7h1v1H1zM4 7h1v1H4zM1 8h1v1H1zM5 8h1v1H5zM1 9h1v1H1zM6 9h1v1H6z" />
    </svg>
  )
);

SvgArrowLeftToLine.displayName = "SvgArrowLeftToLine";

export default SvgArrowLeftToLine;
