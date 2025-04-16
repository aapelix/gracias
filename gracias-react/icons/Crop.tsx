import * as React from "react";

interface SvgCropProps extends React.SVGAttributes<SVGElement> {}

const SvgCrop = React.forwardRef<SVGSVGElement, SvgCropProps>(
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
      <path d="M3 1h1v1H3zM3 2h1v1H3zM1 3h1v1H1zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM3 4h1v1H3zM8 4h1v1H8zM3 5h1v1H3zM8 5h1v1H8zM3 6h1v1H3zM8 6h1v1H8zM3 7h1v1H3zM8 7h1v1H8zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM10 8h1v1h-1zM8 9h1v1H8zM8 10h1v1H8z" />
    </svg>
  )
);

SvgCrop.displayName = "SvgCrop";

export default SvgCrop;
