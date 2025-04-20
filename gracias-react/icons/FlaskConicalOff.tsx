import * as React from "react";

interface SvgFlaskConicalOffProps extends React.SVGAttributes<SVGElement> {}

const SvgFlaskConicalOff = React.forwardRef<SVGSVGElement, SvgFlaskConicalOffProps>(
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
      <path d="M1 1h1v1H1zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM2 2h1v1H2zM6 2h1v1H6zM3 3h1v1H3zM4 4h1v1H4zM3 5h1v1H3zM5 5h1v1H5zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM2 7h1v1H2zM6 7h1v1H6zM2 8h1v1H2zM7 8h1v1H7zM1 9h1v1H1zM8 9h1v1H8zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgFlaskConicalOff.displayName = "SvgFlaskConicalOff";

export default SvgFlaskConicalOff;
