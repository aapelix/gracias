import * as React from "react";

interface SvgCloudUploadProps extends React.SVGAttributes<SVGElement> {}

const SvgCloudUpload = React.forwardRef<SVGSVGElement, SvgCloudUploadProps>(
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
      <path d="M3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM2 3h1v1H2zM6 3h1v1H6zM1 4h1v1H1zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM1 5h1v1H1zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM5 6h1v1H5zM10 6h1v1h-1zM1 7h1v1H1zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM10 7h1v1h-1zM3 8h1v1H3zM5 8h1v1H5zM7 8h1v1H7zM9 8h1v1H9zM5 9h1v1H5zM5 10h1v1H5z" />
    </svg>
  )
);

SvgCloudUpload.displayName = "SvgCloudUpload";

export default SvgCloudUpload;
