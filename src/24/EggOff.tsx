import * as React from "react";

interface SvgEggOffProps extends React.SVGAttributes<SVGElement> {}

const SvgEggOff = React.forwardRef<SVGSVGElement, SvgEggOffProps>(
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
      <path d="M1 1h1v1H1zm1 0h1v1H2zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 2h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm5 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 3h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 4h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm10 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 5h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm10 0h1v1h-1zm1 0h1v1h-1zM5 6h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 7h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm9 0h1v1h-1zm1 0h1v1h-1zM4 8h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm9 0h1v1h-1zm1 0h1v1h-1zM4 9h1v1H4zm1 0h1v1H5zm3 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm8 0h1v1h-1zm1 0h1v1h-1zM4 10h1v1H4zm1 0h1v1H5zm4 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1zM4 11h1v1H4zm1 0h1v1H5zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm6 0h1v1h-1zm1 0h1v1h-1zM3 12h1v1H3zm1 0h1v1H4zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm6 0h1v1h-1zm1 0h1v1h-1zM3 13h1v1H3zm1 0h1v1H4zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM4 14h1v1H4zm1 0h1v1H5zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zM4 15h1v1H4zm1 0h1v1H5zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 16h1v1H4zm1 0h1v1H5zm10 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 17h1v1H4zm1 0h1v1H5zm11 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 18h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 19h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 20h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 21h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM9 22h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgEggOff.displayName = "SvgEggOff";

export default SvgEggOff;
