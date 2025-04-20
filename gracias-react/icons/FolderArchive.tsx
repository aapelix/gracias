import * as React from "react";

interface SvgFolderArchiveProps extends React.SVGAttributes<SVGElement> {}

const SvgFolderArchive = React.forwardRef<SVGSVGElement, SvgFolderArchiveProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM1 2h1v1H1zM6 2h1v1H6zM1 3h1v1H1zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM1 4h1v1H1zM10 4h1v1h-1zM1 5h1v1H1zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM10 6h1v1h-1zM1 7h1v1H1zM7 7h1v1H7zM10 7h1v1h-1zM1 8h1v1H1zM7 8h1v1H7zM10 8h1v1h-1zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM6 9h1v1H6zM8 9h1v1H8zM7 10h1v1H7z" />
    </svg>
  )
);

SvgFolderArchive.displayName = "SvgFolderArchive";

export default SvgFolderArchive;
