import * as React from "react";

interface SvgMoveLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgMoveLeft = React.forwardRef<SVGSVGElement, SvgMoveLeftProps>(
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
      <path d="M5 7h1v1H5zm1 0h1v1H6zM4 8h1v1H4zm1 0h1v1H5zm1 0h1v1H6zM3 9h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm-3 1h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm-3 1h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 12h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 13h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm-1 1h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm-1 1h1v1H5zm1 0h1v1H6z" />
    </svg>
  )
);

SvgMoveLeft.displayName = "SvgMoveLeft";

export default SvgMoveLeft;
