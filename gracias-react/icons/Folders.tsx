import * as React from "react";

interface SvgFoldersProps extends React.SVGAttributes<SVGElement> {}

const SvgFolders = React.forwardRef<SVGSVGElement, SvgFoldersProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM2 2h1v1H2zM6 2h1v1H6zM0 3h1v1H0zM2 3h1v1H2zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM0 4h1v1H0zM2 4h1v1H2zM10 4h1v1h-1zM0 5h1v1H0zM2 5h1v1H2zM10 5h1v1h-1zM0 6h1v1H0zM2 6h1v1H2zM10 6h1v1h-1zM0 7h1v1H0zM2 7h1v1H2zM10 7h1v1h-1zM0 8h1v1H0zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM0 9h1v1H0zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgFolders.displayName = "SvgFolders";

export default SvgFolders;
