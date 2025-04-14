import * as React from "react";

interface SvgWormProps extends React.SVGAttributes<SVGElement> {}

const SvgWorm = React.forwardRef<SVGSVGElement, SvgWormProps>(
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
      <path d="M5 2h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zM3 3h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zM2 4h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm6 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 5h1v1H1zm1 0h1v1H2zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 6h1v1H1zm1 0h1v1H2zm10 0h1v1h-1zm1 0h1v1h-1zM1 7h1v1H1zm1 0h1v1H2zm4 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm5 0h1v1h-1zm1 0h1v1h-1zM2 8h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm4 0h1v1h-1zm1 0h1v1h-1zM3 9h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm3 0h1v1H8zm1 0h1v1H9zm4 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1H8zm1 0h1v1H9zm4 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm4 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM7 12h1v1H7zm1 0h1v1H8zm4 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM7 13h1v1H7zm1 0h1v1H8zm4 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM7 14h1v1H7zm1 0h1v1H8zm4 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 15h1v1H7zm1 0h1v1H8zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 16h1v1H7zm1 0h1v1H8zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM8 17h1v1H8zm1 0h1v1H9zm10 0h1v1h-1zm1 0h1v1h-1zM8 18h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM9 19h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm6 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-12 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-10 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgWorm.displayName = "SvgWorm";

export default SvgWorm;
