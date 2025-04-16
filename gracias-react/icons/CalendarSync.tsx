import * as React from "react";

interface SvgCalendarSyncProps extends React.SVGAttributes<SVGElement> {}

const SvgCalendarSync = React.forwardRef<SVGSVGElement, SvgCalendarSyncProps>(
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
      <path d="M4 0h1v1H4zM7 0h1v1H7zM2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM1 2h1v1H1zM4 2h1v1H4zM7 2h1v1H7zM10 2h1v1h-1zM1 3h1v1H1zM10 3h1v1h-1zM1 4h1v1H1zM2 4h1v1H2zM3 4h1v1H3zM1 5h1v1H1zM5 5h1v1H5zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM1 6h1v1H1zM5 6h1v1H5zM6 6h1v1H6zM10 6h1v1h-1zM1 7h1v1H1zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM1 8h1v1H1zM1 9h1v1H1zM8 9h1v1H8zM9 9h1v1H9zM10 9h1v1h-1zM1 10h1v1H1zM5 10h1v1H5zM9 10h1v1H9zM10 10h1v1h-1zM2 11h1v1H2zM3 11h1v1H3zM6 11h1v1H6zM7 11h1v1H7zM8 11h1v1H8zM10 11h1v1h-1z" />
    </svg>
  )
);

SvgCalendarSync.displayName = "SvgCalendarSync";

export default SvgCalendarSync;
