import * as React from "react";

interface SvgSkipForwardProps extends React.SVGAttributes<SVGElement> {}

const SvgSkipForward = React.forwardRef<SVGSVGElement, SvgSkipForwardProps>(
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
      <path d="M4 3h1v1H4zm1 0h1v1H5zM4 4h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm12 0h1v1h-1zm1 0h1v1h-1zM4 5h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm10 0h1v1h-1zm1 0h1v1h-1zM4 6h1v1H4zm1 0h1v1H5zm2 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm9 0h1v1h-1zm1 0h1v1h-1zM4 7h1v1H4zm1 0h1v1H5zm3 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm8 0h1v1h-1zm1 0h1v1h-1zM4 8h1v1H4zm1 0h1v1H5zm4 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1zM4 9h1v1H4zm1 0h1v1H5zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM4 10h1v1H4zm1 0h1v1H5zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM4 11h1v1H4zm1 0h1v1H5zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM4 12h1v1H4zm1 0h1v1H5zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM4 13h1v1H4zm1 0h1v1H5zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM4 14h1v1H4zm1 0h1v1H5zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM4 15h1v1H4zm1 0h1v1H5zm4 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1zM4 16h1v1H4zm1 0h1v1H5zm3 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm8 0h1v1h-1zm1 0h1v1h-1zM4 17h1v1H4zm1 0h1v1H5zm2 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm9 0h1v1h-1zm1 0h1v1h-1zM4 18h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm10 0h1v1h-1zm1 0h1v1h-1zM4 19h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm12 0h1v1h-1zm1 0h1v1h-1zM4 20h1v1H4zm1 0h1v1H5z" />
    </svg>
  )
);

SvgSkipForward.displayName = "SvgSkipForward";

export default SvgSkipForward;
