import * as React from "react";

interface SvgArrowDownLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowDownLeft = React.forwardRef<SVGSVGElement, SvgArrowDownLeftProps>(
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
      <path d="M6 6h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zM6 7h1v1H6zm1 0h1v1H7zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 8h1v1H6zm1 0h1v1H7zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 9h1v1H6zm1 0h1v1H7zm6 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-9 1h1v1H6zm1 0h1v1H7zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H6zm1 0h1v1H7zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1H6zm1 0h1v1H7zm2 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm-4 1h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm-3 1h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 17h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgArrowDownLeft.displayName = "SvgArrowDownLeft";

export default SvgArrowDownLeft;
