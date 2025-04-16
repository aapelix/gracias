import * as React from "react";

interface SvgArrowDownFromLineProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowDownFromLine = React.forwardRef<SVGSVGElement, SvgArrowDownFromLineProps>(
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
      <path d="M2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM5 4h1v1H5zM5 5h1v1H5zM5 6h1v1H5zM5 7h1v1H5zM3 8h1v1H3zM5 8h1v1H5zM7 8h1v1H7zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM5 10h1v1H5z" />
    </svg>
  )
);

SvgArrowDownFromLine.displayName = "SvgArrowDownFromLine";

export default SvgArrowDownFromLine;
