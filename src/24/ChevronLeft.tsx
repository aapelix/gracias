import * as React from "react";

interface SvgChevronLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronLeft = React.forwardRef<SVGSVGElement, SvgChevronLeftProps>(
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
      <path d="M14 5h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm-2 1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm-1 1h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgChevronLeft.displayName = "SvgChevronLeft";

export default SvgChevronLeft;
