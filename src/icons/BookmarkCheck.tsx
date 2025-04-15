import * as React from "react";

interface SvgBookmarkCheckProps extends React.SVGAttributes<SVGElement> {}

const SvgBookmarkCheck = React.forwardRef<SVGSVGElement, SvgBookmarkCheckProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM2 2h1v1H2zM9 2h1v1H9zM2 3h1v1H2zM9 3h1v1H9zM2 4h1v1H2zM7 4h1v1H7zM9 4h1v1H9zM2 5h1v1H2zM4 5h1v1H4zM6 5h1v1H6zM9 5h1v1H9zM2 6h1v1H2zM5 6h1v1H5zM9 6h1v1H9zM2 7h1v1H2zM9 7h1v1H9zM2 8h1v1H2zM5 8h1v1H5zM6 8h1v1H6zM9 8h1v1H9zM2 9h1v1H2zM4 9h1v1H4zM7 9h1v1H7zM9 9h1v1H9zM2 10h1v1H2zM3 10h1v1H3zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgBookmarkCheck.displayName = "SvgBookmarkCheck";

export default SvgBookmarkCheck;
