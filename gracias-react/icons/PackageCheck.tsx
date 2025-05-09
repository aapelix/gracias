import * as React from "react";

interface SvgPackageCheckProps extends React.SVGAttributes<SVGElement> {}

const SvgPackageCheck = React.forwardRef<SVGSVGElement, SvgPackageCheckProps>(
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
      <path d="M5 1h1v1H5zM6 1h1v1H6zM3 2h1v1H3zM4 2h1v1H4zM7 2h1v1H7zM8 2h1v1H8zM1 3h1v1H1zM2 3h1v1H2zM5 3h1v1H5zM6 3h1v1H6zM9 3h1v1H9zM10 3h1v1h-1zM1 4h1v1H1zM3 4h1v1H3zM4 4h1v1H4zM7 4h1v1H7zM8 4h1v1H8zM10 4h1v1h-1zM1 5h1v1H1zM5 5h1v1H5zM6 5h1v1H6zM1 6h1v1H1zM5 6h1v1H5zM1 7h1v1H1zM5 7h1v1H5zM10 7h1v1h-1zM1 8h1v1H1zM2 8h1v1H2zM5 8h1v1H5zM7 8h1v1H7zM9 8h1v1H9zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM8 9h1v1H8zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgPackageCheck.displayName = "SvgPackageCheck";

export default SvgPackageCheck;
