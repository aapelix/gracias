import * as React from "react";

interface SvgArrowBigRightProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowBigRight = React.forwardRef<SVGSVGElement, SvgArrowBigRightProps>(
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
      <path d="M11 4h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 8h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 9h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 10h1v1H5zm1 0h1v1H6zm10 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 11h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 12h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 13h1v1H5zm1 0h1v1H6zm10 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 14h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 15h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-4 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgArrowBigRight.displayName = "SvgArrowBigRight";

export default SvgArrowBigRight;
