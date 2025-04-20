import * as React from "react";

interface SvgFlaskRoundProps extends React.SVGAttributes<SVGElement> {}

const SvgFlaskRound = React.forwardRef<SVGSVGElement, SvgFlaskRoundProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM4 2h1v1H4zM6 2h1v1H6zM4 3h1v1H4zM6 3h1v1H6zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM3 5h1v1H3zM7 5h1v1H7zM2 6h1v1H2zM8 6h1v1H8zM2 7h1v1H2zM3 7h1v1H3zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM8 7h1v1H8zM2 8h1v1H2zM8 8h1v1H8zM3 9h1v1H3zM7 9h1v1H7zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgFlaskRound.displayName = "SvgFlaskRound";

export default SvgFlaskRound;
