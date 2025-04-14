import * as React from "react";

interface SvgEllipsisProps extends React.SVGAttributes<SVGElement> {}

const SvgEllipsis = React.forwardRef<SVGSVGElement, SvgEllipsisProps>(
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
      <path d="M2 5h1v1H2zm1 0h1v1H3zm2 0h1v1H5zm1 0h1v1H6zm2 0h1v1H8zm1 0h1v1H9zM2 6h1v1H2zm1 0h1v1H3zm2 0h1v1H5zm1 0h1v1H6zm2 0h1v1H8zm1 0h1v1H9z" />
    </svg>
  )
);

SvgEllipsis.displayName = "SvgEllipsis";

export default SvgEllipsis;
