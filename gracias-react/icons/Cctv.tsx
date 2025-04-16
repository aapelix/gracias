import * as React from "react";

interface SvgCctvProps extends React.SVGAttributes<SVGElement> {}

const SvgCctv = React.forwardRef<SVGSVGElement, SvgCctvProps>(
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
      <path d="M4 1h1v1H4zM5 1h1v1H5zM3 2h1v1H3zM6 2h1v1H6zM7 2h1v1H7zM2 3h1v1H2zM8 3h1v1H8zM9 3h1v1H9zM2 4h1v1H2zM4 4h1v1H4zM5 4h1v1H5zM9 4h1v1H9zM2 5h1v1H2zM9 5h1v1H9zM3 6h1v1H3zM4 6h1v1H4zM8 6h1v1H8zM10 6h1v1h-1zM5 7h1v1H5zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM1 8h1v1H1zM4 8h1v1H4zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM1 9h1v1H1zM2 9h1v1H2zM3 9h1v1H3zM1 10h1v1H1z" />
    </svg>
  )
);

SvgCctv.displayName = "SvgCctv";

export default SvgCctv;
