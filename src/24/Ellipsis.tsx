import * as React from "react";

interface SvgEllipsisProps extends React.SVGAttributes<SVGElement> {}

const SvgEllipsis = React.forwardRef<SVGSVGElement, SvgEllipsisProps>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      shapeRendering="crispEdges"
      ref={ref}
      {...props}
    >
      <path d="M4 10h1v1H4zm1 0h1v1H5zm6 0h1v1h-1zm1 0h1v1h-1zm6 0h1v1h-1zm1 0h1v1h-1zM3 11h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 12h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 13h1v1H4zm1 0h1v1H5zm6 0h1v1h-1zm1 0h1v1h-1zm6 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgEllipsis.displayName = "SvgEllipsis";

export default SvgEllipsis;
