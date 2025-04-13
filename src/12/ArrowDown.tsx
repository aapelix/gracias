import * as React from "react";

interface SvgArrowDownProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowDown = React.forwardRef<SVGSVGElement, SvgArrowDownProps>(
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
      <path d="M5 2h1v1H5zm0 1h1v1H5zm0 1h1v1H5zm0 1h1v1H5zM2 6h1v1H2zm3 0h1v1H5zm3 0h1v1H8zM3 7h1v1H3zm2 0h1v1H5zm2 0h1v1H7zM4 8h1v1H4zm1 0h1v1H5zm1 0h1v1H6zM5 9h1v1H5z" />
    </svg>
  )
);

SvgArrowDown.displayName = "SvgArrowDown";

export default SvgArrowDown;
