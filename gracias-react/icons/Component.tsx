import * as React from "react";

interface SvgComponentProps extends React.SVGAttributes<SVGElement> {}

const SvgComponent = React.forwardRef<SVGSVGElement, SvgComponentProps>(
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
      <path d="M5 1h1v1H5zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM5 3h1v1H5zM2 4h1v1H2zM8 4h1v1H8zM1 5h1v1H1zM2 5h1v1H2zM3 5h1v1H3zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM2 6h1v1H2zM8 6h1v1H8zM5 7h1v1H5zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM5 9h1v1H5z" />
    </svg>
  )
);

SvgComponent.displayName = "SvgComponent";

export default SvgComponent;
