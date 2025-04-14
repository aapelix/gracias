import * as React from "react";

interface SvgTractorProps extends React.SVGAttributes<SVGElement> {}

const SvgTractor = React.forwardRef<SVGSVGElement, SvgTractorProps>(
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
      <path d="M2 3h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zM2 4h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM3 5h1v1H3zm1 0h1v1H4zm3 0h1v1H7zm1 0h1v1H8zm3 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 6h1v1H3zm1 0h1v1H4zm3 0h1v1H7zm1 0h1v1H8zm3 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM3 7h1v1H3zm1 0h1v1H4zm3 0h1v1H7zm1 0h1v1H8zm3 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM3 8h1v1H3zm1 0h1v1H4zm3 0h1v1H7zm1 0h1v1H8zm4 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM3 9h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm4 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM3 10h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 11h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm5 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 12h1v1H2zm1 0h1v1H3zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 13h1v1H1zm1 0h1v1H2zm9 0h1v1h-1zm1 0h1v1h-1zm9 0h1v1h-1zm1 0h1v1h-1zM1 14h1v1H1zm1 0h1v1H2zm4 0h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1zm9 0h1v1h-1zm1 0h1v1h-1zM1 15h1v1H1zm1 0h1v1H2zm4 0h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 16h1v1H1zm1 0h1v1H2zm9 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 17h1v1H2zm1 0h1v1H3zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 18h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm5 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM3 19h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 20h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgTractor.displayName = "SvgTractor";

export default SvgTractor;
