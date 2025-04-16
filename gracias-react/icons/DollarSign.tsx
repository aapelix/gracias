import * as React from "react";

interface SvgDollarSignProps extends React.SVGAttributes<SVGElement> {}

const SvgDollarSign = React.forwardRef<SVGSVGElement, SvgDollarSignProps>(
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
      <path d="M5 0h1v1H5zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM2 2h1v1H2zM5 2h1v1H5zM2 3h1v1H2zM5 3h1v1H5zM2 4h1v1H2zM5 4h1v1H5zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM5 6h1v1H5zM8 6h1v1H8zM5 7h1v1H5zM8 7h1v1H8zM5 8h1v1H5zM8 8h1v1H8zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM5 10h1v1H5z" />
    </svg>
  )
);

SvgDollarSign.displayName = "SvgDollarSign";

export default SvgDollarSign;
