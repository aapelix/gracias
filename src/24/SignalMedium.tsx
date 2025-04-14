import * as React from "react";

interface SvgSignalMediumProps extends React.SVGAttributes<SVGElement> {}

const SvgSignalMedium = React.forwardRef<SVGSVGElement, SvgSignalMediumProps>(
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
      <path d="M11 11h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm-6 1h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1zM1 19h1v1H1zm1 0h1v1H2zm4 0h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1zM1 20h1v1H1zm1 0h1v1H2zm4 0h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgSignalMedium.displayName = "SvgSignalMedium";

export default SvgSignalMedium;
