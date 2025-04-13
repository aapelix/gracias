import * as React from "react";

interface SvgAlignCenterHorizontalProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignCenterHorizontal = React.forwardRef<SVGSVGElement, SvgAlignCenterHorizontalProps>(
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
      <path d="M3 1h1v1H3zm1 0h1v1H4zM2 2h1v1H2zm3 0h1v1H5zm3 0h1v1H8zm1 0h1v1H9zM2 3h1v1H2zm3 0h1v1H5zm2 0h1v1H7zm3 0h1v1h-1zM2 4h1v1H2zm3 0h1v1H5zm2 0h1v1H7zm3 0h1v1h-1zM1 6h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zM2 8h1v1H2zm3 0h1v1H5zm2 0h1v1H7zm3 0h1v1h-1zM2 9h1v1H2zm3 0h1v1H5zm2 0h1v1H7zm3 0h1v1h-1zm-8 1h1v1H2zm3 0h1v1H5zm3 0h1v1H8zm1 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4z" />
    </svg>
  )
);

SvgAlignCenterHorizontal.displayName = "SvgAlignCenterHorizontal";

export default SvgAlignCenterHorizontal;
