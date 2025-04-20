import * as React from "react";

interface SvgFolderLockProps extends React.SVGAttributes<SVGElement> {}

const SvgFolderLock = React.forwardRef<SVGSVGElement, SvgFolderLockProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM1 2h1v1H1zM6 2h1v1H6zM1 3h1v1H1zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM1 4h1v1H1zM10 4h1v1h-1zM1 5h1v1H1zM1 6h1v1H1zM9 6h1v1H9zM1 7h1v1H1zM8 7h1v1H8zM9 7h1v1H9zM1 8h1v1H1zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM10 8h1v1h-1zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM7 9h1v1H7zM10 9h1v1h-1zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgFolderLock.displayName = "SvgFolderLock";

export default SvgFolderLock;
