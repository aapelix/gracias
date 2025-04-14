import * as React from "react";

interface SvgTerminalProps extends React.SVGAttributes<SVGElement> {}

const SvgTerminal = React.forwardRef<SVGSVGElement, SvgTerminalProps>(
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
      <path d="M3 4h1v1H3zm1 0h1v1H4zM3 5h1v1H3zm1 0h1v1H4zm1 0h1v1H5zM4 6h1v1H4zm1 0h1v1H5zm1 0h1v1H6zM5 7h1v1H5zm1 0h1v1H6zm1 0h1v1H7zM6 8h1v1H6zm1 0h1v1H7zm1 0h1v1H8zM7 9h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm-1 1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm-2 1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm-3 1h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm-3 1h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm-3 1h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm-3 1h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm-3 1h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm-2 1h1v1H3zm1 0h1v1H4zm7 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-9 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgTerminal.displayName = "SvgTerminal";

export default SvgTerminal;
