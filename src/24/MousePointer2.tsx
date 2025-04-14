import * as React from "react";

interface SvgMousePointer2Props extends React.SVGAttributes<SVGElement> {}

const SvgMousePointer2 = React.forwardRef<SVGSVGElement, SvgMousePointer2Props>(
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
      <path d="M4 3h1v1H4zm1 0h1v1H5zM3 4h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zM3 5h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zM4 6h1v1H4zm1 0h1v1H5zm3 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 7h1v1H4zm1 0h1v1H5zm6 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 8h1v1H5zm1 0h1v1H6zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 9h1v1H5zm1 0h1v1H6zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 10h1v1H5zm1 0h1v1H6zm12 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 11h1v1H6zm1 0h1v1H7zm10 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 12h1v1H6zm1 0h1v1H7zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 13h1v1H7zm1 0h1v1H8zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-9 1h1v1H7zm1 0h1v1H8zm4 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H8zm1 0h1v1H9zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H8zm1 0h1v1H9zm2 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgMousePointer2.displayName = "SvgMousePointer2";

export default SvgMousePointer2;
