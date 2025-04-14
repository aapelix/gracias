import * as React from "react";

interface SvgMoveUpLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgMoveUpLeft = React.forwardRef<SVGSVGElement, SvgMoveUpLeftProps>(
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
      <path d="M4 4h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zM4 5h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zM4 6h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zM4 7h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zM4 8h1v1H4zm1 0h1v1H5zm2 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zM4 9h1v1H4zm1 0h1v1H5zm3 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm-6 1h1v1H4zm1 0h1v1H5zm4 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H4zm1 0h1v1H5zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgMoveUpLeft.displayName = "SvgMoveUpLeft";

export default SvgMoveUpLeft;
