import * as React from "react";

interface SvgAmbulanceProps extends React.SVGAttributes<SVGElement> {}

const SvgAmbulance = React.forwardRef<SVGSVGElement, SvgAmbulanceProps>(
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
      <path d="M2 2h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zM1 3h1v1H1zm5 0h1v1H6zM1 4h1v1H1zm5 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zM1 5h1v1H1zm2 0h1v1H3zm3 0h1v1H6zm3 0h1v1H9zM1 6h1v1H1zm2 0h1v1H3zm1 0h1v1H4zm2 0h1v1H6zm4 0h1v1h-1zM1 7h1v1H1zm2 0h1v1H3zm3 0h1v1H6zm4 0h1v1h-1zM1 8h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm2 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zM2 9h1v1H2zm2 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm2 0h1v1H9zm1 0h1v1h-1zm-8 1h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm3 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9z" />
    </svg>
  )
);

SvgAmbulance.displayName = "SvgAmbulance";

export default SvgAmbulance;
