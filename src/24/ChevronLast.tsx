import * as React from "react";

interface SvgChevronLastProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronLast = React.forwardRef<SVGSVGElement, SvgChevronLastProps>(
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
      <path d="M6 5h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zM6 6h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm8 0h1v1h-1zm1 0h1v1h-1zM7 7h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm7 0h1v1h-1zm1 0h1v1h-1zM8 8h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm6 0h1v1h-1zm1 0h1v1h-1zM9 9h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm-9 1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm6 0h1v1h-1zm1 0h1v1h-1zM7 16h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm7 0h1v1h-1zm1 0h1v1h-1zM6 17h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm8 0h1v1h-1zm1 0h1v1h-1zM6 18h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgChevronLast.displayName = "SvgChevronLast";

export default SvgChevronLast;
