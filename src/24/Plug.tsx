import * as React from "react";

interface SvgPlugProps extends React.SVGAttributes<SVGElement> {}

const SvgPlug = React.forwardRef<SVGSVGElement, SvgPlugProps>(
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
      <path d="M8 1h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zM8 2h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zM8 3h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zM8 4h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zM8 5h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zM8 6h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zM5 7h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 8h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 9h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 10h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 11h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 12h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 13h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 14h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM6 15h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zM6 16h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-4 1h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgPlug.displayName = "SvgPlug";

export default SvgPlug;
