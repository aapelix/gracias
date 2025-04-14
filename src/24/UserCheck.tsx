import * as React from "react";

interface SvgUserCheckProps extends React.SVGAttributes<SVGElement> {}

const SvgUserCheck = React.forwardRef<SVGSVGElement, SvgUserCheckProps>(
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
      <path d="M7 2h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zM6 3h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 4h1v1H5zm1 0h1v1H6zm5 0h1v1h-1zm1 0h1v1h-1zM4 5h1v1H4zm1 0h1v1H5zm7 0h1v1h-1zm1 0h1v1h-1zM4 6h1v1H4zm1 0h1v1H5zm7 0h1v1h-1zm1 0h1v1h-1zM4 7h1v1H4zm1 0h1v1H5zm7 0h1v1h-1zm1 0h1v1h-1zM4 8h1v1H4zm1 0h1v1H5zm7 0h1v1h-1zm1 0h1v1h-1zm8 0h1v1h-1zm1 0h1v1h-1zM5 9h1v1H5zm1 0h1v1H6zm5 0h1v1h-1zm1 0h1v1h-1zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 10h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 11h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-4 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm1 0h1v1h-1zM4 14h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 15h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 16h1v1H2zm1 0h1v1H3zm11 0h1v1h-1zm1 0h1v1h-1zM1 17h1v1H1zm1 0h1v1H2zm13 0h1v1h-1zm1 0h1v1h-1zM1 18h1v1H1zm1 0h1v1H2zm13 0h1v1h-1zm1 0h1v1h-1zM1 19h1v1H1zm1 0h1v1H2zm13 0h1v1h-1zm1 0h1v1h-1zM1 20h1v1H1zm1 0h1v1H2zm13 0h1v1h-1zm1 0h1v1h-1zM1 21h1v1H1zm1 0h1v1H2zm13 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgUserCheck.displayName = "SvgUserCheck";

export default SvgUserCheck;
