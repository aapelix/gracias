import * as React from "react";

interface SvgAirVentProps extends React.SVGAttributes<SVGElement> {}

const SvgAirVent = React.forwardRef<SVGSVGElement, SvgAirVentProps>(
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
      <path d="M2 1h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zM1 2h1v1H1zm9 0h1v1h-1zM1 3h1v1H1zm2 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm2 0h1v1h-1zM1 4h1v1H1zm9 0h1v1h-1zM1 5h1v1H1zm9 0h1v1h-1zM2 6h1v1H2zm1 0h1v1H3zm2 0h1v1H5zm2 0h1v1H7zm2 0h1v1H9zM5 7h1v1H5zm2 0h1v1H7zM3 8h1v1H3zm2 0h1v1H5zm2 0h1v1H7zM4 9h1v1H4zm3 0h1v1H7zm2 0h1v1H9zm-1 1h1v1H8z" />
    </svg>
  )
);

SvgAirVent.displayName = "SvgAirVent";

export default SvgAirVent;
