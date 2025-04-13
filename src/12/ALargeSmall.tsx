import * as React from "react";

interface SvgALargeSmallProps extends React.SVGAttributes<SVGElement> {}

const SvgALargeSmall = React.forwardRef<SVGSVGElement, SvgALargeSmallProps>(
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
      <path d="M1 3h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zM1 4h1v1H1zm3 0h1v1H4zM1 5h1v1H1zm3 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zM1 6h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm3 0h1v1H7zm3 0h1v1h-1zM1 7h1v1H1zm3 0h1v1H4zm3 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zM1 8h1v1H1zm3 0h1v1H4zm3 0h1v1H7zm3 0h1v1h-1z" />
    </svg>
  )
);

SvgALargeSmall.displayName = "SvgALargeSmall";

export default SvgALargeSmall;
