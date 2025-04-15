import * as React from "react";

interface SvgBookOpenCheckProps extends React.SVGAttributes<SVGElement> {}

const SvgBookOpenCheck = React.forwardRef<SVGSVGElement, SvgBookOpenCheckProps>(
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
      <path d="M1 1h1v1H1zM2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM1 2h1v1H1zM5 2h1v1H5zM9 2h1v1H9zM1 3h1v1H1zM5 3h1v1H5zM1 4h1v1H1zM5 4h1v1H5zM10 4h1v1h-1zM1 5h1v1H1zM5 5h1v1H5zM7 5h1v1H7zM9 5h1v1H9zM1 6h1v1H1zM5 6h1v1H5zM8 6h1v1H8zM1 7h1v1H1zM5 7h1v1H5zM1 8h1v1H1zM2 8h1v1H2zM3 8h1v1H3zM5 8h1v1H5zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM5 10h1v1H5z" />
    </svg>
  )
);

SvgBookOpenCheck.displayName = "SvgBookOpenCheck";

export default SvgBookOpenCheck;
