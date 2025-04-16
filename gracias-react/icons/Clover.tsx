import * as React from "react";

interface SvgCloverProps extends React.SVGAttributes<SVGElement> {}

const SvgClover = React.forwardRef<SVGSVGElement, SvgCloverProps>(
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
      <path d="M5 1h1v1H5zM7 1h1v1H7zM4 2h1v1H4zM6 2h1v1H6zM8 2h1v1H8zM3 3h1v1H3zM4 3h1v1H4zM8 3h1v1H8zM9 3h1v1H9zM2 4h1v1H2zM5 4h1v1H5zM7 4h1v1H7zM10 4h1v1h-1zM3 5h1v1H3zM6 5h1v1H6zM9 5h1v1H9zM2 6h1v1H2zM5 6h1v1H5zM7 6h1v1H7zM10 6h1v1h-1zM3 7h1v1H3zM4 7h1v1H4zM8 7h1v1H8zM9 7h1v1H9zM3 8h1v1H3zM4 8h1v1H4zM6 8h1v1H6zM8 8h1v1H8zM2 9h1v1H2zM5 9h1v1H5zM7 9h1v1H7zM1 10h1v1H1z" />
    </svg>
  )
);

SvgClover.displayName = "SvgClover";

export default SvgClover;
