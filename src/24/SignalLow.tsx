import * as React from "react";

interface SvgSignalLowProps extends React.SVGAttributes<SVGElement> {}

const SvgSignalLow = React.forwardRef<SVGSVGElement, SvgSignalLowProps>(
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
      <path d="M6 15h1v1H6zm1 0h1v1H7zm-1 1h1v1H6zm1 0h1v1H7zm-1 1h1v1H6zm1 0h1v1H7zm-1 1h1v1H6zm1 0h1v1H7zm-6 1h1v1H1zm1 0h1v1H2zm4 0h1v1H6zm1 0h1v1H7zm-6 1h1v1H1zm1 0h1v1H2zm4 0h1v1H6zm1 0h1v1H7z" />
    </svg>
  )
);

SvgSignalLow.displayName = "SvgSignalLow";

export default SvgSignalLow;
