import * as React from "react";

interface SvgFunnelXProps extends React.SVGAttributes<SVGElement> {}

const SvgFunnelX = React.forwardRef<SVGSVGElement, SvgFunnelXProps>(
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
      <path d="M2 2h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 3h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM1 4h1v1H1zm1 0h1v1H2zm14 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 5h1v1H2zm1 0h1v1H3zm14 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 6h1v1H3zm1 0h1v1H4zm13 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 7h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm11 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 8h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm10 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM5 9h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm-1 1h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm-1 1h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm-4 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgFunnelX.displayName = "SvgFunnelX";

export default SvgFunnelX;
