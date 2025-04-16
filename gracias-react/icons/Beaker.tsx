import * as React from "react";

interface SvgBeakerProps extends React.SVGAttributes<SVGElement> {}

const SvgBeaker = React.forwardRef<SVGSVGElement, SvgBeakerProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM3 2h1v1H3zM8 2h1v1H8zM3 3h1v1H3zM8 3h1v1H8zM3 4h1v1H3zM8 4h1v1H8zM3 5h1v1H3zM8 5h1v1H8zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM3 7h1v1H3zM8 7h1v1H8zM3 8h1v1H3zM8 8h1v1H8zM3 9h1v1H3zM8 9h1v1H8zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgBeaker.displayName = "SvgBeaker";

export default SvgBeaker;
