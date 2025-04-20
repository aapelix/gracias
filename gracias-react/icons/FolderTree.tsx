import * as React from "react";

interface SvgFolderTreeProps extends React.SVGAttributes<SVGElement> {}

const SvgFolderTree = React.forwardRef<SVGSVGElement, SvgFolderTreeProps>(
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
      <path d="M5 0h1v1H5zM6 0h1v1H6zM7 0h1v1H7zM1 1h1v1H1zM5 1h1v1H5zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM1 2h1v1H1zM5 2h1v1H5zM10 2h1v1h-1zM1 3h1v1H1zM2 3h1v1H2zM3 3h1v1H3zM5 3h1v1H5zM10 3h1v1h-1zM1 4h1v1H1zM5 4h1v1H5zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM10 4h1v1h-1zM1 5h1v1H1zM1 6h1v1H1zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM1 7h1v1H1zM5 7h1v1H5zM7 7h1v1H7zM8 7h1v1H8zM9 7h1v1H9zM1 8h1v1H1zM2 8h1v1H2zM3 8h1v1H3zM5 8h1v1H5zM10 8h1v1h-1zM5 9h1v1H5zM10 9h1v1h-1zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgFolderTree.displayName = "SvgFolderTree";

export default SvgFolderTree;
