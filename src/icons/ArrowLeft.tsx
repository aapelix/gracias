import * as React from "react";

interface SvgArrowLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowLeft = React.forwardRef<SVGSVGElement, SvgArrowLeftProps>(
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
      <path d="M5 3h1v1H5zM4 4h1v1H4zM3 5h1v1H3zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM3 7h1v1H3zM4 8h1v1H4zM5 9h1v1H5z" />
    </svg>
  )
);

SvgArrowLeft.displayName = "SvgArrowLeft";

export default SvgArrowLeft;
