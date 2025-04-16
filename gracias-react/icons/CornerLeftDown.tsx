import * as React from "react";

interface SvgCornerLeftDownProps extends React.SVGAttributes<SVGElement> {}

const SvgCornerLeftDown = React.forwardRef<SVGSVGElement, SvgCornerLeftDownProps>(
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
      <path d="M4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM3 3h1v1H3zM3 4h1v1H3zM3 5h1v1H3zM3 6h1v1H3zM3 7h1v1H3zM1 8h1v1H1zM3 8h1v1H3zM5 8h1v1H5zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM3 10h1v1H3z" />
    </svg>
  )
);

SvgCornerLeftDown.displayName = "SvgCornerLeftDown";

export default SvgCornerLeftDown;
