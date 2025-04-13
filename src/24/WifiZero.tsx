import * as React from "react";

interface SvgWifiZeroProps extends React.SVGAttributes<SVGElement> {}

const SvgWifiZero = React.forwardRef<SVGSVGElement, SvgWifiZeroProps>(
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
      <path d="M11 19h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgWifiZero.displayName = "SvgWifiZero";

export default SvgWifiZero;
