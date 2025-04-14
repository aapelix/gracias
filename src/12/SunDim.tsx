import * as React from "react";

interface SvgSunDimProps extends React.SVGAttributes<SVGElement> {}

const SvgSunDim = React.forwardRef<SVGSVGElement, SvgSunDimProps>(
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
      <path d="M6 1h1v1H6zM3 2h1v1H3zm2 1h1v1H5zm1 0h1v1H6zm3 0h1v1H9zM4 4h1v1H4zm3 0h1v1H7zM1 5h1v1H1zm2 0h1v1H3zm5 0h1v1H8zM3 6h1v1H3zm5 0h1v1H8zm2 0h1v1h-1zM4 7h1v1H4zm3 0h1v1H7zM2 8h1v1H2zm3 0h1v1H5zm1 0h1v1H6zm2 1h1v1H8zm-3 1h1v1H5z" />
    </svg>
  )
);

SvgSunDim.displayName = "SvgSunDim";

export default SvgSunDim;
