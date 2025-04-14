import * as React from "react";

interface SvgToyBrickProps extends React.SVGAttributes<SVGElement> {}

const SvgToyBrick = React.forwardRef<SVGSVGElement, SvgToyBrickProps>(
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
      <path d="M5 3h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 4h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 5h1v1H4zm1 0h1v1H5zm4 0h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM4 6h1v1H4zm1 0h1v1H5zm4 0h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM3 7h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 8h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 9h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 10h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 11h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 12h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 13h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 14h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 15h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 16h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 17h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 18h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 19h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 20h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgToyBrick.displayName = "SvgToyBrick";

export default SvgToyBrick;
