import * as React from "react";

interface SvgTimerOffProps extends React.SVGAttributes<SVGElement> {}

const SvgTimerOff = React.forwardRef<SVGSVGElement, SvgTimerOffProps>(
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
      <path d="M1 1h1v1H1zm1 0h1v1H2zm7 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 2h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm6 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 3h1v1H2zm1 0h1v1H3zm1 0h1v1H4zM3 4h1v1H3zm1 0h1v1H4zm1 0h1v1H5zM4 5h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm3 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 6h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 7h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 8h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM8 9h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 10h1v1H4zm5 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm6 0h1v1h-1zm1 0h1v1h-1zM3 11h1v1H3zm1 0h1v1H4zm6 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1zM3 12h1v1H3zm1 0h1v1H4zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm6 0h1v1h-1zm1 0h1v1h-1zM3 13h1v1H3zm1 0h1v1H4zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM3 14h1v1H3zm1 0h1v1H4zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM3 15h1v1H3zm1 0h1v1H4zm10 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM3 16h1v1H3zm1 0h1v1H4zm11 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 17h1v1H4zm1 0h1v1H5zm11 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 18h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 19h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm11 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 20h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm11 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 21h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM9 22h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgTimerOff.displayName = "SvgTimerOff";

export default SvgTimerOff;
