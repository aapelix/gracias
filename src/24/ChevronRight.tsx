import * as React from "react";

interface SvgChevronRightProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronRight = React.forwardRef<SVGSVGElement, SvgChevronRightProps>(
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
      <path d="M8 5h1v1H8zm1 0h1v1H9zM8 6h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zM9 7h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm-2 1h1v1H8zm1 0h1v1H9z" />
    </svg>
  )
);

SvgChevronRight.displayName = "SvgChevronRight";

export default SvgChevronRight;
