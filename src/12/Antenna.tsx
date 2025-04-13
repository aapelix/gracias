import * as React from "react";

interface SvgAntennaProps extends React.SVGAttributes<SVGElement> {}

const SvgAntenna = React.forwardRef<SVGSVGElement, SvgAntennaProps>(
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
      <path d="M3 1h1v1H3zm2 0h1v1H5zm2 0h1v1H7zm2 0h1v1H9zM3 2h1v1H3zm2 0h1v1H5zm2 0h1v1H7zm2 0h1v1H9zM2 3h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zM1 4h1v1H1zm2 0h1v1H3zm2 0h1v1H5zm2 0h1v1H7zM1 5h1v1H1zm2 0h1v1H3zm2 0h1v1H5zm2 0h1v1H7zM5 7h1v1H5zm0 1h1v1H5zm0 1h1v1H5z" />
    </svg>
  )
);

SvgAntenna.displayName = "SvgAntenna";

export default SvgAntenna;
