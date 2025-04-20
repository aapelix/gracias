import * as React from "react";

interface SvgEqualApproximatelyProps extends React.SVGAttributes<SVGElement> {}

const SvgEqualApproximately = React.forwardRef<SVGSVGElement, SvgEqualApproximatelyProps>(
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
      <path d="M3 3h1v1H3zM4 3h1v1H4zM2 4h1v1H2zM5 4h1v1H5zM6 4h1v1H6zM9 4h1v1H9zM7 5h1v1H7zM8 5h1v1H8zM3 6h1v1H3zM4 6h1v1H4zM2 7h1v1H2zM5 7h1v1H5zM6 7h1v1H6zM9 7h1v1H9zM7 8h1v1H7zM8 8h1v1H8z" />
    </svg>
  )
);

SvgEqualApproximately.displayName = "SvgEqualApproximately";

export default SvgEqualApproximately;
