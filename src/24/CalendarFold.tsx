import * as React from "react";

interface SvgCalendarFoldProps extends React.SVGAttributes<SVGElement> {}

const SvgCalendarFold = React.forwardRef<SVGSVGElement, SvgCalendarFoldProps>(
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
      <path d="M7 1h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zM7 2h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zM3 3h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 4h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 5h1v1H2zm1 0h1v1H3zm4 0h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM2 6h1v1H2zm1 0h1v1H3zm4 0h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM2 7h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 8h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 9h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 10h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 11h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 12h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 13h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 14h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 15h1v1H2zm1 0h1v1H3zm12 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 16h1v1H2zm1 0h1v1H3zm11 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 17h1v1H2zm1 0h1v1H3zm11 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 18h1v1H2zm1 0h1v1H3zm11 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 19h1v1H2zm1 0h1v1H3zm11 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 20h1v1H2zm1 0h1v1H3zm11 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 21h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 22h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgCalendarFold.displayName = "SvgCalendarFold";

export default SvgCalendarFold;
