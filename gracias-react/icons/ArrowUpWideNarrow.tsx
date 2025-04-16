import * as React from "react";

interface SvgArrowUpWideNarrowProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowUpWideNarrow = React.forwardRef<SVGSVGElement, SvgArrowUpWideNarrowProps>(
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
      <path d="M3 1h1v1H3zM2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM1 3h1v1H1zM3 3h1v1H3zM5 3h1v1H5zM3 4h1v1H3zM3 5h1v1H3zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM3 6h1v1H3zM3 7h1v1H3zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM8 7h1v1H8zM3 8h1v1H3zM3 9h1v1H3zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7z" />
    </svg>
  )
);

SvgArrowUpWideNarrow.displayName = "SvgArrowUpWideNarrow";

export default SvgArrowUpWideNarrow;
