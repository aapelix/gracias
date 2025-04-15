import * as React from "react";

interface SvgAnchorProps extends React.SVGAttributes<SVGElement> {}

const SvgAnchor = React.forwardRef<SVGSVGElement, SvgAnchorProps>(
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
      <path d="M5 1h1v1H5zM6 1h1v1H6zM4 2h1v1H4zM7 2h1v1H7zM4 3h1v1H4zM7 3h1v1H7zM5 4h1v1H5zM6 4h1v1H6zM5 5h1v1H5zM1 6h1v1H1zM2 6h1v1H2zM5 6h1v1H5zM8 6h1v1H8zM9 6h1v1H9zM1 7h1v1H1zM5 7h1v1H5zM9 7h1v1H9zM1 8h1v1H1zM5 8h1v1H5zM9 8h1v1H9zM2 9h1v1H2zM5 9h1v1H5zM8 9h1v1H8zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgAnchor.displayName = "SvgAnchor";

export default SvgAnchor;
