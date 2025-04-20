import * as React from "react";

interface SvgFireExtinguisherProps extends React.SVGAttributes<SVGElement> {}

const SvgFireExtinguisher = React.forwardRef<SVGSVGElement, SvgFireExtinguisherProps>(
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
      <path d="M5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM4 2h1v1H4zM5 2h1v1H5zM7 2h1v1H7zM8 2h1v1H8zM3 3h1v1H3zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM2 4h1v1H2zM5 4h1v1H5zM7 4h1v1H7zM2 5h1v1H2zM4 5h1v1H4zM8 5h1v1H8zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM8 6h1v1H8zM2 7h1v1H2zM4 7h1v1H4zM8 7h1v1H8zM2 8h1v1H2zM4 8h1v1H4zM8 8h1v1H8zM2 9h1v1H2zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM4 10h1v1H4zM8 10h1v1H8zM5 11h1v1H5zM6 11h1v1H6zM7 11h1v1H7z" />
    </svg>
  )
);

SvgFireExtinguisher.displayName = "SvgFireExtinguisher";

export default SvgFireExtinguisher;
