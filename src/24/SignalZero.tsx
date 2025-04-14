import * as React from "react";

interface SvgSignalZeroProps extends React.SVGAttributes<SVGElement> {}

const SvgSignalZero = React.forwardRef<SVGSVGElement, SvgSignalZeroProps>(
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
      <path d="M1 19h1v1H1zm1 0h1v1H2zm-1 1h1v1H1zm1 0h1v1H2z" />
    </svg>
  )
);

SvgSignalZero.displayName = "SvgSignalZero";

export default SvgSignalZero;
