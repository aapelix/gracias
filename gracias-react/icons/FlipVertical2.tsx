import * as React from "react";

interface SvgFlipVertical2Props extends React.SVGAttributes<SVGElement> {}

const SvgFlipVertical2 = React.forwardRef<SVGSVGElement, SvgFlipVertical2Props>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM5 3h1v1H5zM0 5h1v1H0zM1 5h1v1H1zM3 5h1v1H3zM4 5h1v1H4zM6 5h1v1H6zM7 5h1v1H7zM9 5h1v1H9zM10 5h1v1h-1zM5 7h1v1H5zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7z" />
    </svg>
  )
);

SvgFlipVertical2.displayName = "SvgFlipVertical2";

export default SvgFlipVertical2;
