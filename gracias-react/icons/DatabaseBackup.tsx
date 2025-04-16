import * as React from "react";

interface SvgDatabaseBackupProps extends React.SVGAttributes<SVGElement> {}

const SvgDatabaseBackup = React.forwardRef<SVGSVGElement, SvgDatabaseBackupProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM1 2h1v1H1zM2 2h1v1H2zM9 2h1v1H9zM10 2h1v1h-1zM1 3h1v1H1zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM10 3h1v1h-1zM1 4h1v1H1zM1 5h1v1H1zM6 5h1v1H6zM8 5h1v1H8zM9 5h1v1H9zM1 6h1v1H1zM2 6h1v1H2zM6 6h1v1H6zM7 6h1v1H7zM10 6h1v1h-1zM1 7h1v1H1zM3 7h1v1H3zM4 7h1v1H4zM6 7h1v1H6zM7 7h1v1H7zM8 7h1v1H8zM10 7h1v1h-1zM1 8h1v1H1zM10 8h1v1h-1zM1 9h1v1H1zM2 9h1v1H2zM6 9h1v1H6zM10 9h1v1h-1zM3 10h1v1H3zM4 10h1v1H4zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgDatabaseBackup.displayName = "SvgDatabaseBackup";

export default SvgDatabaseBackup;
