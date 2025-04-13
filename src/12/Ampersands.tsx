import * as React from "react";

interface SvgAmpersandsProps extends React.SVGAttributes<SVGElement> {}

const SvgAmpersands = React.forwardRef<SVGSVGElement, SvgAmpersandsProps>(
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
      <path d="M2 2h1v1H2zm5 0h1v1H7zM1 3h1v1H1zm2 0h1v1H3zm3 0h1v1H6zm2 0h1v1H8zM1 4h1v1H1zm2 0h1v1H3zm3 0h1v1H6zm2 0h1v1H8zM2 5h1v1H2zm5 0h1v1H7zM1 6h1v1H1zm1 0h1v1H2zm2 0h1v1H4zm2 0h1v1H6zm2 0h1v1H8zm2 0h1v1h-1zM1 7h1v1H1zm2 0h1v1H3zm1 0h1v1H4zm2 0h1v1H6zm2 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zM1 8h1v1H1zm2 0h1v1H3zm1 0h1v1H4zm2 0h1v1H6zm2 0h1v1H8zm1 0h1v1H9zM2 9h1v1H2zm5 0h1v1H7z" />
    </svg>
  )
);

SvgAmpersands.displayName = "SvgAmpersands";

export default SvgAmpersands;
