import * as React from "react";

interface SvgSpadeProps extends React.SVGAttributes<SVGElement> {}

const SvgSpade = React.forwardRef<SVGSVGElement, SvgSpadeProps>(
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
      <path d="M11 1h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM9 3h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM8 4h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 5h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 6h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 7h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 8h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 9h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm13 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 10h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm15 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 11h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM1 12h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 13h1v1H1zm1 0h1v1H2zm19 0h1v1h-1zm1 0h1v1h-1zM1 14h1v1H1zm1 0h1v1H2zm19 0h1v1h-1zm1 0h1v1h-1zM1 15h1v1H1zm1 0h1v1H2zm19 0h1v1h-1zm1 0h1v1h-1zM1 16h1v1H1zm1 0h1v1H2zm18 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 17h1v1H2zm1 0h1v1H3zm8 0h1v1h-1zm1 0h1v1h-1zm8 0h1v1h-1zm1 0h1v1h-1zM2 18h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 19h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 20h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm2 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgSpade.displayName = "SvgSpade";

export default SvgSpade;
