import * as React from "react";

interface SvgBeefProps extends React.SVGAttributes<SVGElement> {}

const SvgBeef = React.forwardRef<SVGSVGElement, SvgBeefProps>(
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
      <path d="M10 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM8 2h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 3h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm6 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 4h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 5h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 6h1v1H5zm1 0h1v1H6zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 7h1v1H5zm1 0h1v1H6zm3 0h1v1H9zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM5 8h1v1H5zm1 0h1v1H6zm3 0h1v1H9zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 9h1v1H4zm1 0h1v1H5zm4 0h1v1H9zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 10h1v1H4zm1 0h1v1H5zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 11h1v1H3zm1 0h1v1H4zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zM2 12h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm12 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zM1 13h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm12 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM1 14h1v1H1zm1 0h1v1H2zm11 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM1 15h1v1H1zm1 0h1v1H2zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM1 16h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm6 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 17h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm6 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 18h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 19h1v1H3zm1 0h1v1H4zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 20h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm6 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 21h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgBeef.displayName = "SvgBeef";

export default SvgBeef;
