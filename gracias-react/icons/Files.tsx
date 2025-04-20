import * as React from "react";

interface SvgFilesProps extends React.SVGAttributes<SVGElement> {}

const SvgFiles = React.forwardRef<SVGSVGElement, SvgFilesProps>(
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
      <path d="M4 0h1v1H4zM5 0h1v1H5zM6 0h1v1H6zM3 1h1v1H3zM6 1h1v1H6zM7 1h1v1H7zM1 2h1v1H1zM3 2h1v1H3zM6 2h1v1H6zM8 2h1v1H8zM1 3h1v1H1zM3 3h1v1H3zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM9 3h1v1H9zM1 4h1v1H1zM3 4h1v1H3zM9 4h1v1H9zM1 5h1v1H1zM3 5h1v1H3zM9 5h1v1H9zM1 6h1v1H1zM3 6h1v1H3zM9 6h1v1H9zM1 7h1v1H1zM3 7h1v1H3zM9 7h1v1H9zM1 8h1v1H1zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM1 9h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgFiles.displayName = "SvgFiles";

export default SvgFiles;
