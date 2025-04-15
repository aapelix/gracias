import * as React from "react";

interface SvgArrowUpFromLineProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowUpFromLine = React.forwardRef<SVGSVGElement, SvgArrowUpFromLineProps>(
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
      <path d="M5 1h1v1H5zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM3 3h1v1H3zM5 3h1v1H5zM7 3h1v1H7zM2 4h1v1H2zM5 4h1v1H5zM8 4h1v1H8zM5 5h1v1H5zM5 6h1v1H5zM5 7h1v1H5zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8z" />
    </svg>
  )
);

SvgArrowUpFromLine.displayName = "SvgArrowUpFromLine";

export default SvgArrowUpFromLine;
