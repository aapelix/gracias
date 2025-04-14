import * as React from "react";

interface SvgChevronsRightProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronsRight = React.forwardRef<SVGSVGElement, SvgChevronsRightProps>(
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
      <path d="M5 6h1v1H5zm1 0h1v1H6zm6 0h1v1h-1zm1 0h1v1h-1zM5 7h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 8h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 9h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-9 1h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM8 13h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 14h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 15h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 16h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-9 1h1v1H5zm1 0h1v1H6zm6 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgChevronsRight.displayName = "SvgChevronsRight";

export default SvgChevronsRight;
